import { TDocumentDefinitions } from 'pdfmake/interfaces';

export interface DocumentGenerator {
    parseJsonToDocumentFields<T>(json: any): T;
    generateDocumentDefinition<T>(fields: T): TDocumentDefinitions;
    generatePdf(
        json: any,
        callback: (document: NodeJS.ReadableStream) => void
    ): void;
}
