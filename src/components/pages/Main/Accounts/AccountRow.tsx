import React from "react"
import { Account } from "../../../../helpers/types"

function AccountRow({ account, setTempAccount, index, setAccIndex }: props) {
    let { name, current, goal, priority } = account

    const handleChange = (value: string | number, param: string) => {
        const newAccount: Account = { ...account, [param]: value }
        console.log(newAccount)
        setTempAccount(newAccount)
        setAccIndex(index)
    }

    return (
        <div className="flex justify-center w-4/5 items-center py-5 gap-x-10">
            <input
                type="text"
                className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 text-center"
                defaultValue={name}
                onChange={(e) => {
                    handleChange(e.target.value, "name")
                }}
            />
            <input
                type="number"
                className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 text-center"
                defaultValue={current}
                onChange={(e) => {
                    handleChange(parseInt(e.target.value), "current")
                }}
            />
            <input
                type="number"
                className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 text-center"
                defaultValue={goal}
                onChange={(e) => {
                    handleChange(parseInt(e.target.value), "goal")
                }}
            />
            <div className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16">
                {priority}
            </div>
        </div>
    )
}

type props = {
    account: Account
    setTempAccount: any
    index: number
    setAccIndex: any
}

export default AccountRow
