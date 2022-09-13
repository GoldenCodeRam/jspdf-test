export function generateEqualSizedColumns(amount: number, size: number) {
    return Array(amount).fill(size);
}

export function generatePercentageColumns(amount: number, percentage: string) {
    return Array(amount).fill(percentage);
}