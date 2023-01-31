import React, { useState } from "react"

type Props = {
    setTotalMonths: (val: number) => void
}

function Duration({setTotalMonths}: Props) {
    const [months, setMonths] = useState<number>(0);
    const [years, setYears] = useState<number>(0);

    const handleMonthChange = (val: number) => {
        setMonths(val);
        setTotalMonths(val + (12*years))
    }

    const handleYearChange = (val: number) => {
        setYears(val);
        setTotalMonths((val*12) + months);
    }

    return (
        <div className="flex text-center justify-center flex-col items-center py-20 w-full">
            <div className="font-inter font-black text-2xl text-white py-5">
                DURATION
            </div>
            <div className="flex justify-center w-4/5 items-center gap-x-3">
                <span className="px-5 py-5 font-inter font-black text-l text-white w-48 h-16">
                    YEARS
                </span>
                <span className="px-5 py-5 font-inter font-black text-l text-white w-48 h-16">
                    MONTHS
                </span>
            </div>
            <div className="flex justify-center w-4/5 items-center gap-x-3">
            <input
                type="number"
                className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 text-center"
                defaultValue="0"
                onChange={(e) => handleYearChange(parseInt(e.target.value))}
            />
            <input
                type="number"
                className="bg-secondary rounded-2xl font-inter font-black px-5 py-5 text-primary w-48 h-16 text-center"
                defaultValue="0"
                onChange={(e) => handleMonthChange(parseInt(e.target.value))}
            />
            </div>
        </div>
    )
}

export default Duration
