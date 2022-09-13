export class TableInfo {
    constructor(
        public currentPage = 0,
        public pageCount = 0,

        private consecutiveFieldNumber = 1
    ) {}

    public getConsecutiveFieldNumber(
        startFrom: number | undefined = undefined
    ) {
        // Return the consecutive field number and then increase it.
        if (startFrom) {
            this.consecutiveFieldNumber = startFrom;
        }
        return this.consecutiveFieldNumber++;
    }
}
