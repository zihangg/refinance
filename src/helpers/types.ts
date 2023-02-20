export type Account = {
    name: string | undefined
    current: number | undefined
    goal: number | undefined
    priority: Priority
    completed?: boolean
}

export enum Priority {
    NULL,
    HIGH,
    MEDIUM,
    LOW,
}

export type ChartData = {
    month: number,
    [key: string]: number // account datas on that month
}

export type CurrMonthValues = {
    [key: string]: number
}