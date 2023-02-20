import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { ChartData } from "../../../helpers/types"
import { chartLineColors } from "../../../helpers/chart"
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material"
import styles from "./Report.module.css"

function Report() {
    const location = useLocation()

    const { savingsData, expensesData, investmentData } = location.state.data

    const generateGraph = (data: ChartData[]) => {
        const keys = Object.keys(data[0]).filter(
            (key) => !key.includes("month")
        )

        return (
            <div>
                <LineChart
                    width={900}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis
                        dataKey="month"
                        tick={{
                            fontSize: 14,
                            fill: "black",
                            fontWeight: "bold",
                        }}
                        stroke="black"
                    />
                    <YAxis
                        tick={{
                            fontSize: 14,
                            fill: "black",
                            fontWeight: "bold",
                        }}
                        stroke="black"
                    />
                    <Tooltip />
                    <Legend />
                    {keys.map((key, i) => {
                        return (
                            <Line
                                key={key}
                                type="monotone"
                                dataKey={key}
                                stroke={chartLineColors[i]}
                                dot={false}
                            />
                        )
                    })}
                </LineChart>
            </div>
        )
    }

    const generateTable = (data: ChartData[]) => {
        const keys = Object.keys(data[0])

        data.forEach((row) => console.log(row))
        return (
            <div className={styles.table}>
                {/* <div style={{ width: 400, height: 500, overflow: "auto" }}> */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {Object.keys(data[0]).map((key) => (
                                        <TableCell
                                            key={key}
                                            align="center"
                                            style={{ fontWeight: "bold" }}
                                        >
                                            {key.toUpperCase()}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.month}>
                                        {Object.keys(row).map((key) => (
                                            <TableCell key={key} align="center">
                                                {row[key]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                {/* </div> */}
            </div>
        )
    }

    return (
        <>
            <div className="flex justify-center items-center flex-col py-10">
                <div className="flex text-center justify-center font-inter font-black text-2xl text-secondary">
                    FINANCIAL GOALS REPORT
                </div>
                <div className="flex flex-col space-y-24">
                    <div className="space-y-8">
                        <div className="flex text-center justify-center font-inter font-black text-XL text-secondary py-5">
                            SECTION A: SAVINGS OVER TIME
                        </div>
                        <div className="flex items-center justify-center space-x-10">
                            {generateGraph(savingsData)}
                            {generateTable(savingsData)}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="flex text-center justify-center font-inter font-black text-XL text-secondary py-5">
                            SECTION B: EXPENSES OVER TIME
                        </div>
                        <div className="flex items-center justify-center space-x-10">
                            {generateGraph(expensesData)}
                            {generateTable(expensesData)}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="flex text-center justify-center font-inter font-black text-XL text-secondary py-5">
                            SECTION C: INVESTMENTS OVER TIME
                        </div>
                        <div className="flex items-center justify-center space-x-10">
                            {generateGraph(investmentData)}
                            {generateTable(investmentData)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report
