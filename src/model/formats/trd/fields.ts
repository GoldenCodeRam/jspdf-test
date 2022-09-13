import { Date } from '../../../util/date';

export type TrdFields = {
    producingEntity: string;
    producingOffice: string;
    responsibleSignature: string;
    date: Date;
    items: TrdItem[];
};

export type TrdItem = {
    code: string;
    series: string;
    managementFile: string;
    centralFile: string;
    ct: boolean;
    e: boolean;
    m: boolean;
    s: boolean;
    procedures: string;
};
