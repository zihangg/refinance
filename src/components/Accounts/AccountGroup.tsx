import React, { useEffect, useState } from "react"
import { Account, Priority } from "../../helpers/types"
import AccountRow from "./AccountRow"

type Props = {
    accounts: Account[]
    setAccounts: (value: Account[]) => void
    groupName: string
}

function AccountGroup({ accounts, setAccounts, groupName }: Props) {
    const [tempAccount, setTempAccount] = useState<Account>()
    const [accIndex, setAccIndex] = useState<number>(0)

    useEffect(() => {
        if (tempAccount !== undefined) {
            const newAccounts = [...accounts]
            newAccounts[accIndex] = tempAccount
            setAccounts(newAccounts)
        }
    }, [tempAccount])

    const handleAddRow = () => {
        const placeholderAccount: Account = {
            name: "BANK",
            current: 1000,
            goal: 2000,
            priority: Priority.HIGH,
        }

        setAccounts([...accounts, placeholderAccount])
    }

    return (
        <div className="flex text-center justify-center flex-col items-center w-full">
            <div className="font-inter font-black text-xl text-white py-5">
                {groupName}
            </div>
            <div className="flex justify-center gap-x-10 w-4/5 items-center">
                <span className="px-5 py-5 font-inter font-black text-l text-white w-48 h-16">
                    NAME
                </span>
                <span className="px-5 py-5 font-inter font-black text-l text-white w-48 h-16">
                    CURRENT
                </span>
                <span className="px-5 py-5 font-inter font-black text-l text-white w-48 h-16">
                    GOAL
                </span>
                <span className="px-5 py-5 font-inter font-black text-l text-white w-48 h-16">
                    PRIORITY
                </span>
            </div>
            {accounts.map((account, index) => {
                return (
                    <AccountRow
                        key={index}
                        account={account}
                        setTempAccount={setTempAccount}
                        index={index}
                        setAccIndex={setAccIndex}
                    />
                )
            })}
            <button
                className="bg-secondary rounded-2xl font-inter font-black text-primary w-60 h-12 text-center my-10 hover:bg-opacity-70"
                onClick={handleAddRow}
            >
                Add Row
            </button>
        </div>
    )
}

export default AccountGroup
