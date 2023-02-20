// Process the data provided for report generation

import { Account, ChartData, CurrMonthValues } from "./types"

export const buildData = (
    salary: number,
    sav: number,
    exp: number,
    inv: number,
    savings: Account[],
    expenses: Account[],
    investments: Account[],
    totalMonths: number
) => {
    // actual amounts per month
    const savingsAmount = (salary * sav) / 100
    const expensesAmount = (salary * exp) / 100
    const investmentAmount = (salary * inv) / 100

    // data per category
    const savingsData = calculateCategory(savingsAmount, savings, totalMonths)
    const expensesData = calculateCategory(
        expensesAmount,
        expenses,
        totalMonths
    )
    const investmentData = calculateCategory(
        investmentAmount,
        investments,
        totalMonths
    )

    return { savingsData, expensesData, investmentData }
}

/**
 * @param apm (amount/month)
 * @param accounts
 * @param totalMonths (total months to calculate)
 * @returns ChartData
 */
const calculateCategory = (
    apm: number,
    accounts: Account[],
    totalMonths: number
): any => {
    let currMonthValues: CurrMonthValues = {}
    let currentPriority: number = 1
    let remainderFromAccount = 0

    // set current month value & set completion for account to false
    for (const account of accounts) {
        currMonthValues[account.name!] = account.current!
        account.completed = false
    }

    let categoryData: ChartData[] = []

    for (let i = 0; i <= totalMonths; i++) {
        if (i == 0) {
            categoryData[i] = { month: i, ...currMonthValues }
            continue
        } else {
            calculateMonthlyValues(
                i,
                currMonthValues,
                currentPriority,
                accounts,
                categoryData,
                apm,
                remainderFromAccount,
                totalMonths
            )
        }
    }

    return categoryData
}

const calculateMonthlyValues = (
    month: number,
    currMonthValues: CurrMonthValues,
    currentPriority: number,
    accounts: Account[],
    categoryData: ChartData[],
    apm: number,
    remainderFromAccount: number,
    totalMonths: number
) => {
    let priorityAccounts = 0

    while (priorityAccounts === 0 && currentPriority < 4) {
        for (const account of accounts) {
            if (account.priority === currentPriority && !account.completed) {
                priorityAccounts++
            }
        }

        if (month === totalMonths && priorityAccounts === 0) {
            break
        }

        if (priorityAccounts === 0 && currentPriority <= 3) {
            currentPriority++
        }
    }

    let amountPerAccount = apm / priorityAccounts

    for (const account of accounts) {
        let accountRemainder = 0
        if (account.priority === currentPriority && !account.completed) {
            let newCurrValue = currMonthValues[account.name!] + amountPerAccount
            if (newCurrValue > account.goal!) {
                accountRemainder = newCurrValue - account.goal!
                remainderFromAccount = accountRemainder
                account.completed = true
            } else if (newCurrValue == account.goal!) {
                account.completed = true
            }
            currMonthValues[account.name!] +=
                amountPerAccount - accountRemainder
        }
    }

    if (remainderFromAccount > 0) {
        if (priorityAccounts === 1) {
            // give amount to next priority level
            calculateMonthlyValues(
                month,
                currMonthValues,
                currentPriority + 1,
                accounts,
                categoryData,
                remainderFromAccount,
                0,
                totalMonths
            )
        } else if (priorityAccounts > 1) {
            // give amount to next account in same priority level
            calculateMonthlyValues(
                month,
                currMonthValues,
                currentPriority,
                accounts,
                categoryData,
                remainderFromAccount,
                0,
                totalMonths
            )
        }
    }

    categoryData[month] = { month: month, ...currMonthValues }
}
