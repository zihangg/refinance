import React, { useEffect, useState } from "react"
import { Account, Priority } from "../../../../helpers/types"
import PriorityModal from "./PriorityModal"

function AccountRow({ account, setTempAccount, index, setAccIndex }: props) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    let { name, current, goal, priority } = account

    const [currentPriority, setPriority] = useState<Priority>(priority)

    const handleChange = (value: string | number | Priority, param: string) => {
        const newAccount: Account = { ...account, [param]: value }
        console.log(newAccount)
        setTempAccount(newAccount)
        setAccIndex(index)
    }

    useEffect(() => {
        handleChange(currentPriority, "priority")
    }, [currentPriority])

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
            <button
                className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 hover:opacity-80"
                onClick={handleOpen}
            >
                {Priority[priority]}
            </button>
            <PriorityModal
                open={open}
                handleClose={handleClose}
                setPriority={setPriority}
            />
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
