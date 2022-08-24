import express from 'express';
import cors from 'cors';
import {
    generateDocumentDefinition,
    generatePdf,
    parseJsonToDocumentFields,
} from './model/formato1/documentGenerator';

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.post('/formato1', (request, response) => {
    // First, get the document fields from the JSON request.
    const documentFields = parseJsonToDocumentFields(request.body);
    // Second, generate the document definition body.
    const documentDefinition = generateDocumentDefinition(documentFields);
    // And finally, generate the PDF.
    response.contentType('application/pdf');
    generatePdf(documentDefinition, (documentPipe: NodeJS.ReadableStream) => {
        documentPipe.pipe(response);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
