import React from "react"

function Salary({ setSalary }: SalaryProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        e.target.value = input.replace(/\D/g, "")

        setSalary(e.target.value)
    }

    return (
        <div className="flex text-center justify-center flex-col items-center">
            <div className="font-inter font-black text-2xl text-white py-5">
                SALARY
            </div>
            <input
                className="w-25 h-10 rounded bg-secondary text-center font-inter font-black text-primary"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                }
            />
        </div>
    )
}

interface SalaryProps {
    setSalary: any
}

export default Salary
