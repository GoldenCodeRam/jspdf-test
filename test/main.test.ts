import {
    generateDocumentDefinition,
    generatePdf,
    parseJsonToDocumentFields,
} from '../src/model/formato1/documentGenerator';
import fs from 'fs';

describe('Formato 1 generation test', () => {
    test('Should generate pdf', () => {
        fs.readFile(
            'res/test/formato1_test1.json',
            'utf8',
            (error, jsonString) => {
                const parsedJson = JSON.parse(jsonString);
                const fields = parseJsonToDocumentFields(parsedJson);

                generatePdf(generateDocumentDefinition(fields), (document) => {
                    document.pipe(
                        fs.createWriteStream('res/test/formato1_test1.pdf')
                    );
                });
            }
        );
    });
});
