import pdfmake from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { largeFooterMarginSize, largeHeaderMarginSize, mediumFooterMarginSize, mediumHeaderMarginSize, normalFooterMarginSize, smallMarginSize } from '../../../util/constants';
import { fonts } from '../../../util/resources';
import { DocumentGenerator } from '../../documentGenerator';
import { generateBody } from './body';
import { FuidFields } from './fields';
import { generateFooter } from './footer';
import { generateHeader } from './header';

export default class FuidDocumentGenerator implements DocumentGenerator {
    generatePdf(
        json: any,
        callback: (document: NodeJS.ReadableStream) => void
    ): void {
        const documentFields = this.parseJsonToDocumentFields<FuidFields>(json);
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

    generateDocumentDefinition(fields: FuidFields): TDocumentDefinitions {
        return {
            pageSize: 'LEGAL',
            pageMargins: [
                smallMarginSize, mediumHeaderMarginSize, smallMarginSize, mediumFooterMarginSize
            ],
            header: generateHeader(fields),
            footer: generateFooter(fields),
            content: generateBody(fields),
        };
    }
}
