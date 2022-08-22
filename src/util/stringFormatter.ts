export class StringFormatter {
    public get value(): string {
        return this._value;
    }
    private set value(value: string) {
        this._value = value;
    }

    constructor(private _value: string) {}

    public addColon(): StringFormatter {
        this._value += ':';
        return this;
    }

    public addLineFeed(): StringFormatter {
        this._value += '\n';
        return this;
    }

    public addConsecutiveNumber(consecutive: number): StringFormatter {
        this._value = `${consecutive}. ${this._value}`;
        return this;
    }
}
