import React from "react"
import SliderSection from "./SliderSection"

type Props = {
    sav: number
    setSav: (val: number) => void
    exp: number
    setExp: (val: number) => void
    inv: number
    setInv: (val: number) => void
    salary: number
}

function Config({ sav, setSav, exp, setExp, inv, setInv, salary }: Props) {
    return (
        <div className="flex text-center justify-center flex-col items-center py-20">
            <div className="font-inter font-black text-2xl text-white py-5">
                CONFIG
            </div>
            <div className="flex flex-col w-4/5 bg-secondary rounded-3xl">
                <SliderSection title={"SAV"} value={sav} setValue={setSav} salary={salary}/>
                <SliderSection title={"EXP"} value={exp} setValue={setExp} salary={salary}/>
                <SliderSection title={"INV"} value={inv} setValue={setInv} salary={salary}/>
            </div>
        </div>
    )
}

export default Config
