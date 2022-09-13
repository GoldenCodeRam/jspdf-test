import express from 'express';
import FuidDocumentGenerator from '../model/formats/fuid/documentGenerator';

export function generateFuidEndpoint(app: express.Express) {
    app.post('/fuid', (request, response) => {
        new FuidDocumentGenerator().generatePdf(
            request.body,
            (documentPipe: NodeJS.ReadableStream) => {
                response.contentType('application/pdf');
                documentPipe.pipe(response);
            }
        );
    });
}
