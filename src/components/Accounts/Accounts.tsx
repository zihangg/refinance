import React from "react"
import { Account } from "../../helpers/types"
import AccountGroup from "./AccountGroup"

type Props = {
    savings: Account[]
    setSavings: (val: Account[]) => void
    expenses: Account[]
    setExpenses: (val: Account[]) => void
    investments: Account[]
    setInvestments: (val: Account[]) => void
}

function Accounts({
    savings,
    setSavings,
    expenses,
    setExpenses,
    investments,
    setInvestments,
}: Props) {
    return (
        <div className="flex text-center justify-center flex-col items-center py-10 w-full">
            <div className="font-inter font-black text-2xl text-white py-5">
                ACCOUNTS
            </div>
            <div className="flex text-center justify-center flex-col items-center w-full gap-y-24">
                <AccountGroup
                    accounts={savings}
                    setAccounts={setSavings}
                    groupName={"SAVINGS"}
                />
                <AccountGroup
                    accounts={expenses}
                    setAccounts={setExpenses}
                    groupName={"EXPENSES"}
                />
                <AccountGroup
                    accounts={investments}
                    setAccounts={setInvestments}
                    groupName={"INVESTMENTS"}
                />
            </div>
        </div>
    )
}

export default Accounts
