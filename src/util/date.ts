export type Date = {
    day: number;
    month: number;
    year: number;
};

export function dateToString(date: Date): string {
    return `${date.day}/${date.month}/${date.year}`;
};
