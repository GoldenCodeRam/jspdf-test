import { Date } from '../formato1/fields';

export function generateEqualSizedColumns(amount: number, size: number) {
    return Array(amount).fill(size);
}

export function generatePercentageColumns(amount: number, percentage: string) {
    return Array(amount).fill(percentage);
}

// This conversion is made so some measures can be done in milimeters instead of
// points.
export function mmToPoints(mm: number) {
    const inches = mm * 0.03937;
    return inches * 72;
}

export function dateToString(date: Date) {
    return `${date.day}/${date.month}/${date.year}`;
}
