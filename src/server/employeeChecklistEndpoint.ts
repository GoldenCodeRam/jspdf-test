import express from 'express';
import EmployeeChecklistDocumentGenerator from '../model/formats/employeeChecklist/documentGenerator';

export function generateEmployeeChecklistEndpoint(app: express.Express) {
    app.post('/employeeChecklist', (request, response) => {
        new EmployeeChecklistDocumentGenerator().generatePdf(
            request.body,
            (documentPipe: NodeJS.ReadableStream) => {
                response.contentType('application/pdf');
                documentPipe.pipe(response);
            }
        );
    });
}
