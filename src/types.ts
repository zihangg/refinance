export type Account = {
    name: string | undefined;
    current: number | undefined;
    goal: number | undefined;
    priority: Priority
}

export enum Priority {
    NULL,
    HIGH,
    MEDIUM,
    LOW
}
