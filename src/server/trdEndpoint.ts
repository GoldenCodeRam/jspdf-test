import express from 'express';
import TrdDocumentGenerator from '../model/formats/trd/documentGenerator';

export function generateTrdEndpoint(app: express.Express) {
    app.post('/trd', (request, response) => {
        new TrdDocumentGenerator().generatePdf(
            request.body,
            (documentPipe: NodeJS.ReadableStream) => {
                response.contentType('application/pdf');
                documentPipe.pipe(response);
            }
        );
    });
}
