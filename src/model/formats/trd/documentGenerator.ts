import pdfmake from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import {
    smallMarginSize,
    mediumHeaderMarginSize,
    mediumFooterMarginSize,
} from '../../../util/constants';
import { fonts } from '../../../util/resources';
import { DocumentGenerator } from '../../documentGenerator';
import { generateBody } from './body';
import { TrdFields } from './fields';
import { generateFooter } from './footer';
import { generateHeader } from './header';

export default class FuidDocumentGenerator implements DocumentGenerator {
    generatePdf(
        json: any,
        callback: (document: NodeJS.ReadableStream) => void
    ): void {
        const documentFields = this.parseJsonToDocumentFields<TrdFields>(json);
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

    generateDocumentDefinition(fields: TrdFields): TDocumentDefinitions {
        return {
            pageSize: 'LEGAL',
            pageMargins: [
                smallMarginSize,
                mediumHeaderMarginSize - 60,
                smallMarginSize,
                mediumFooterMarginSize - 60,
            ],
            header: generateHeader(fields),
            footer: generateFooter(fields),
            content: generateBody(fields),
        };
    }
}
