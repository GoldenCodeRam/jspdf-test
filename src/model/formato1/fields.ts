export enum Sector {
    NATIONAL_PUBLIC_SECTOR,
    DISTRITAL_OR_DEPARTAMENTAL_PUBLIC_SECTOR,
    MUNICIPAL_PUBLIC_SECTOR,
}

export enum Document {
    TI,
    CC,
    CE,
    NIT,
}

export enum Procedure {
    YES,
    NO,
    PROCEDING,
}

export enum PensionType {
    ELD,
    INVALID,
    DEATH,
    RETIREMENT,
    SUBSTITUTION,
    GRACE_PENSION,
    RETIREMENT_ASSIGNMENT,
    ISS_CONTRIBUTIONS,
    ELD_RETIREMENT,
}

export type Formato1Fields = {
    certificationCityAndDate: {
        city: string;
        date: Date;
    };
    consecutiveNumber: number;
    certificationEntity: {
        name: string;
        NIT: string;
        address: string;
        city: string;
        DANECode: string;
        department: string;
        departmentDANECode: string;
        phone: string;
        fax?: string;
        email: string;
    };
    employer: {
        name: string;
        NIT: string;
        address: string;
        city: string;
        DANECode: string;
        department: string;
        departmentDANECode: string;
        phone: string;
        fax?: string;
        email: string;
        sector: Sector;
        SGPDate: Date;
    };
    worker: {
        name: string;
        documentType: Document;
        document: string;
        birthdate?: Date;
        alternateName?: string;
        alternateDocumentType?: Document;
        alternateDocument?: string;
    };
    laboralVinculations: Formato1LaboralVinculation[];
    pensionContributions: Formato1PensionContribution[];
    isMigrantWorker: {
        value: boolean;
        workedWeeks: number;
    };
    substituteCompensation: {
        substituteCompensationCertification: Procedure;
        pensionCertification: Procedure;
        kindOfPensionCertification: {
            pensionResolutionNumber: number;
            pensionDate: Date;
            pensionType: PensionType;
        };
        hasOtherEntity: {
            value: boolean;
            otherEntity: string;
            otherEntityNIT: string;
        };
    };
    certificationOfficial: string,
    certificationOfficialDocument: string,
    officialSignature: string,
    officialPosition: string,
    administrativeAct: string,
    projected: string,
};

export type Date = {
    day: number;
    month: number;
    year: number;
};

export type Formato1LaboralVinculation = {
    employer: string;
    position: string;
    totalInterruptionDays: number;
    vinculation: {
        from: Date;
        to: Date;
    };
    interruptions?: {
        from: Date;
        to: Date;
    };
};

export type Formato1PensionContribution = {
    contributionEntity: string;
    contributionEntityNITOrCode: string;
    respondingEntity: string;
    respondingEntityNIT: string;
    hasEmployeeSocialSecurityDiscount: boolean;
    isRespondingEntityRespondingForPeriod: boolean;
    contributionPeriod: {
        from: Date;
        to: Date;
    };
};
