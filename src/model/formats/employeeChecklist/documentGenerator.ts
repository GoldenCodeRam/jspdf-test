import pdfmake from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { normalHeaderMarginSize, smallFooterMarginSize, smallMarginSize } from '../../../util/constants';
import { fonts } from '../../../util/resources';
import { DocumentGenerator } from '../../documentGenerator';
import { generateBody } from './body';
import { EmployeeCheckListFields } from './fields';
import { generateFooter } from './footer';
import { generateHeader } from './header';

export default class EmployeeChecklistDocumentGenerator
    implements DocumentGenerator {
    generatePdf(
        json: any,
        callback: (document: NodeJS.ReadableStream) => void
    ): void {
        const documentFields =
            this.parseJsonToDocumentFields<EmployeeCheckListFields>(json);
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

    generateDocumentDefinition(
        fields: EmployeeCheckListFields
    ): TDocumentDefinitions {
        return {
            pageSize: 'LEGAL',
            pageMargins: [
                smallMarginSize,
                normalHeaderMarginSize,
                smallMarginSize,
                smallFooterMarginSize
            ],
            header: generateHeader(fields),
            footer: generateFooter(fields),
            content: generateBody(fields),
        };
    }
}
