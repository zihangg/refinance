import React, { useState } from "react"
import Salary from "./Salary/Salary"
import Config from "./Config/Config"
import Accounts from "./Accounts/Accounts"
import Duration from "./Duration/Duration"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Account, Priority } from "../types"

function Main() {
    // centralized states
    const [salary, setSalary] = useState<number>(0)
    const [sav, setSav] = React.useState<any>(30)
    const [exp, setExp] = React.useState<any>(30)
    const [inv, setInv] = React.useState<any>(30)
    const [savings, setSavings] = useState<Account[]>([
        {
            name: "MAYBANK",
            current: 2000,
            goal: 5000,
            priority: Priority.HIGH,
        },
        {
            name: "HONG LEONG",
            current: 2000,
            goal: 2000,
            priority: Priority.LOW,
        },
    ])

    const [expenses, setExpenses] = useState<Account[]>([
        {
            name: "GRAB CC",
            current: 2000,
            goal: 5000,
            priority: Priority.HIGH,
        },
        {
            name: "CITI CC",
            current: 2000,
            goal: 2000,
            priority: Priority.LOW,
        },
    ])

    const [investments, setInvestments] = useState<Account[]>([
        {
            name: "STOCKS",
            current: 2000,
            goal: 5000,
            priority: Priority.HIGH,
        },
        {
            name: "UNIT TRUST",
            current: 2000,
            goal: 2000,
            priority: Priority.LOW,
        },
        {
            name: "CRYPTO",
            current: 2000,
            goal: 2000,
            priority: Priority.LOW,
        },
    ])

    const [totalMonths, setTotalMonths] = useState<number>(0);

    return (
        <div className="flex flex-col py-10">
            <Salary setSalary={setSalary} />
            <Config
                sav={sav}
                setSav={setSav}
                exp={exp}
                setExp={setExp}
                inv={inv}
                setInv={setInv}
                salary={salary}
            />
            <Accounts
                savings={savings}
                setSavings={setSavings}
                expenses={expenses}
                setExpenses={setExpenses}
                investments={investments}
                setInvestments={setInvestments}
            />
            <Duration setTotalMonths={setTotalMonths}/>
            <div className="flex justify-center align-center py-10">
                <button className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 text-center hover:bg-opacity-70 flex justify-center gap-x-2">
                    GET REPORT <ArrowForwardIcon />
                </button>
            </div>
        </div>
    )
}

export default Main
