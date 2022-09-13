import { TDocumentDefinitions } from 'pdfmake/interfaces';

export interface DocumentGenerator {
    parseJsonToDocumentFields<T>(json: any): T;
    generateDocumentDefinition(fields: any): TDocumentDefinitions;
    generatePdf(
        json: any,
        callback: (document: NodeJS.ReadableStream) => void
    ): void;
}
