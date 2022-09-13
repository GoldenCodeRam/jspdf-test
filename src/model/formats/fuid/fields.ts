import { Date } from "../../../util/date"

export type FuidFields = {
    date: Date;
    transferNumber?: string;
    sendingEntity?: string;
    producingEntity?: string;
    administrativeUnit?: string;
    productionOffice?: string;
    object?: string;
    madeBy?: {
        name: string;
        position: string;
        signature: string;
        location: string;
        date: Date;
    };
    deliveredBy?: {
        name: string;
        position: string;
        signature: string;
        location: string;
        date: Date;
    };
    receivedBy?: {
        name: string;
        position: string;
        signature: string;
        location: string;
        date: Date;
    };
    items: FuidItem[];
}

export type FuidItem = {
        code: string;
        box: boolean;
        folder: boolean;
        volume: boolean;
        other: boolean;
        volumeNumber: string;
        support: string;
        queryFrecuency: string;
        name?: string;
        document?: string;
        description?: string;
        extremeDates?: {
            from: Date,
            to: Date,
        };
}
