import { Box, Slider } from "@mui/material"
import React from "react"

type Props = {
    title: string
    value: number
    setValue: (value: any) => void
    salary: number
}

function SliderSection({ title, value, setValue, salary }: Props) {
    const style = {
        height: 8,
        color: "#808F87",
        "& .MuiSlider-track": {
            border: "none",
        },
        "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
            },
            "&:before": {
                display: "none",
            },
        },
        "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 12,
            background: "unset",
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: "50% 50% 50% 0",
            backgroundColor: "#808F87",
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&:before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
                transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
            },
            "& > *": {
                transform: "rotate(45deg)",
            },
        },
    }

    const sliderSalary = salary * value / 100; 

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === "" ? "" : Number(event.target.value))
    }

    const handleBlur = () => {
        if (value < 0) {
            setValue(0)
        } else if (value > 100) {
            setValue(100)
        }
    }

    return (
        <div className="flex flex-row py-10 px-10 space-x-10 items-center justify-center">
            <div className="bg-primary rounded-2xl font-inter font-black px-5 py-5 text-secondary">
                {title}
            </div>
            <input
                className="w-20 rounded-2xl bg-primary font-inter font-black text-secondary text-center px-5 py-5"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={value}
            />
            <Box className="w-3/5">
                <Slider
                    value={typeof value === "number" ? value : 0}
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    onChange={handleSliderChange}
                    sx={style}
                />
            </Box>
            <input className="w-40 rounded-2xl bg-primary font-inter font-black text-secondary text-center px-5 py-5" value={sliderSalary} disabled={true}/>
        </div>
    )
}

export default SliderSection
