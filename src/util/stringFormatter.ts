export class StringFormatter {
    public get value(): string {
        return this._value;
    }
    private set value(value: string) {
        this._value = value;
    }

    constructor(private _value: string) {}

    /**
    * This function is made so it can append a number at the start of the
    * field.
    */
    public addConsecutiveNumber(consecutive: number): StringFormatter {
        this._value = `${consecutive}. ${this._value}`;
        return this;
    }

    public addColon(): StringFormatter {
        this._value  += ':';
        return this;
    }
}
