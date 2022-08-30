import pdfmake from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { fonts, fontSizes } from '../../util/resources';
import { DocumentGenerator } from '../documentGenerator';

export default class EmployeeChecklistDocumentGenerator
    implements DocumentGenerator
{
    generatePdf(
        json: any,
        callback: (document: NodeJS.ReadableStream) => void
    ): void {
        const documentFields = this.parseJsonToDocumentFields(json);
        const documentDefinition =
            this.generateDocumentDefinition(documentFields);

        const printer = new pdfmake(fonts);
        const pdfDoc = printer.createPdfKitDocument(documentDefinition);

        callback(pdfDoc);
        pdfDoc.end();
    }

    parseJsonToDocumentFields<T>(json: any): T {
        return json;
    }

    generateDocumentDefinition<T>(fields: T): TDocumentDefinitions {
        return {
            content: ['testing'],
        };
    }
}
