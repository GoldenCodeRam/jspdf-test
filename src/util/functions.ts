// This conversion is made so some measures can be done in milimeters instead of
// points.
export function mmToPoints(mm: number) {
    const inches = mm * 0.03937;
    return inches * 72;
}
