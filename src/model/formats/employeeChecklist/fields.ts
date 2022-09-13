export type EmployeeCheckListFields = {
    fullName: string,
    documentNumber: string,
    listRequirements: {
        requirement: string,
        isLoaded: boolean,
        date?: string,
        description?: string,
    }[],
    dateGeneration: string,
    projected: string
}