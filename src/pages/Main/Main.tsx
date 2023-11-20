import React, { useState } from "react"
import Salary from "../../components/Salary/Salary"
import Config from "../../components/Config/Config"
import Accounts from "../../components/Accounts/Accounts"
import Duration from "../../components/Duration/Duration"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Account, Priority } from "../../helpers/types"
import { useNavigate } from "react-router-dom"
import { buildData } from "../../helpers/data"

function Main() {
    // centralized states
    const [salary, setSalary] = useState<number>(0)
    const [sav, setSav] = React.useState<number>(30)
    const [exp, setExp] = React.useState<number>(30)
    const [inv, setInv] = React.useState<number>(30)
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
            priority: Priority.MEDIUM,
        },
        {
            name: "CRYPTO",
            current: 2000,
            goal: 2000,
            priority: Priority.LOW,
        },
    ])

    const [totalMonths, setTotalMonths] = useState<number>(0)

    // navigation
    const navigate = useNavigate()

    const generateReport = () => {
        const data = buildData(
            salary,
            sav,
            exp,
            inv,
            savings,
            expenses,
            investments,
            totalMonths
        )
        navigate("report", { state: { data } })
    }

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
            <Duration setTotalMonths={setTotalMonths} />
            <div className="flex justify-center align-center py-10">
                <button
                    className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 text-center hover:bg-opacity-70 flex justify-center gap-x-2"
                    onClick={generateReport}
                >
                    GET REPORT <ArrowForwardIcon />
                </button>
            </div>
        </div>
    )
}

export default Main
