import express from "express";
import {
    generateDocumentDefinition,
    generatePdf,
    parseJsonToDocumentFields,
} from '../model/formato1/documentGenerator';

export function generateFormato1Endpoint(app: express.Express) {
    app.post('/formato1', (request, response) => {
        // First, get the document fields from the JSON request.
        const documentFields = parseJsonToDocumentFields(request.body);
        // Second, generate the document definition body.
        const documentDefinition = generateDocumentDefinition(documentFields);
        // And finally, generate the PDF.
        response.contentType('application/pdf');
        generatePdf(
            documentDefinition,
            (documentPipe: NodeJS.ReadableStream) => {
                documentPipe.pipe(response);
            }
        );
    });
}
