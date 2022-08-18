import { jsPDF } from 'jspdf';
import pdfMake from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

test('jsPDF PDF generation test.', () => {
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF({
        format: 'letter',
    });

    doc.setFontSize(9);
    doc.text('Hello world!', 10, 10);
    doc.setFontSize(20);
    doc.text(
        'Hello aslhdflaksdfhlasjdfh lasjfh lasdfh lashd flakdshflakhflakshflakdshflakshdf lakshfd lkashfd lkashf lkashdfjkl ahsljdf haljsk dfhalksdfhlakhsdflkahsdfljkahsdhalskdjhalkshdflakhflak hdlka hsl hsdh fal hasdl hsalkd hlasdh laskh lakj shash ahsd jashd lah lja hdsworld!',
        20,
        110,
        {
            maxWidth: 100,
        }
    );
    doc.cell(30, 30, 100, 100, 'testing', 10, 'center');
    doc.save('jsPDF.pdf');
    doc.setLanguage('es-ES');
});

test('pdfmake PDF generation test.', () => {
    const fonts = {
        Roboto: {
            normal: 'res/fonts/Roboto-Regular.ttf',
            bold: 'res/fonts/Roboto-Medium.ttf',
            italics: 'res/fonts/Roboto-Italic.ttf',
            bolditalics: 'res/fonts/Roboto-MediumItalic.ttf',
        },
    };

    const tableLayouts = {
        withoutLines: {
            vLineWidth: function (i: number, node: any) {
                return 0;
            },
            hLineWidth: function (i: number, node: any) {
                return 0;
            },
        },
        withoutPaddingAndLines: {
            vLineWidth: function (i: number, node: any) {
                return 0;
            },
            hLineWidth: function (i: number, node: any) {
                return 0;
            },
            paddingLeft: function (i: number, node: any) {
                return 0;
            },
            paddingRight: function (i: number, node: any) {
                return 0;
            },
            paddingTop: function (i: number, node: any) {
                return 0;
            },
            paddingBottom: function (i: number, node: any) {
                return 0;
            },
        },
        withoutPadding: {
            paddingLeft: function (i: number, node: any) {
                return 0;
            },
            paddingRight: function (i: number, node: any) {
                return 0;
            },
            paddingTop: function (i: number, node: any) {
                return 0;
            },
            paddingBottom: function (i: number, node: any) {
                return 0;
            },
        },
    };
    const printer = new pdfMake(fonts);
    const fs = require('fs');

    const pageMargins = mmToPoints(10);
    const firstColumnWidth = (mmToPoints(215.9) - pageMargins * 2) / 9 - 1;

    const docDefinition: TDocumentDefinitions = {
        pageSize: {
            // This is a letter size page
            width: mmToPoints(215.9),
            height: mmToPoints(279.4),
        },
        pageMargins: [pageMargins, pageMargins],
        content: [
            {
                layout: tableLayouts.withoutPadding,
                table: {
                    widths: generateEqualSizedColumns(9, firstColumnWidth),
                    body: [
                        [
                            {
                                rowSpan: 3,
                                border: [true, true, false, false],
                                image: 'res/img/escudo_colombia.png',
                                alignment: 'center',
                                margin: [0, 5],
                                width: 40,
                            },
                            emptyTopCell(),
                            emptyTopCell(),
                            {
                                colSpan: 3,
                                border: [false, true, false, false],
                                text: 'REPÚBLICA DE COLOMBIA',
                                fontSize: 10,
                                bold: true,
                                alignment: 'center',
                            },
                            emptyTopCell(),
                            emptyTopCell(),
                            emptyTopCell(),
                            emptyTopCell(),
                            emptyTopRightCell(),
                        ],
                        [
                            emptyCell(),
                            emptyCell(),
                            emptyCell(),
                            {
                                colSpan: 3,
                                border: [false, false, false, false],
                                text: '\nFORMATO No. 1',
                                fontSize: 10,
                                bold: true,
                                alignment: 'center',
                            },
                            '',
                            '',
                            {
                                colSpan: 3,
                                border: [false, false, true, false],
                                alignment: 'center',
                                table: {
                                    widths: ['*'],
                                    body: [
                                        [
                                            {
                                                text: [
                                                    {
                                                        text: 'Ciudad y fecha de expedición certificación:\n',
                                                        alignment: 'right',
                                                        bold: true,
                                                        fontSize: 9,
                                                    },
                                                    {
                                                        text: 'asdfasdfadsf',
                                                        alignment: 'right',
                                                        fontSize: 9,
                                                    },
                                                ],
                                            },
                                        ],
                                    ],
                                },
                            },
                            '',
                            '',
                        ],
                        [
                            '',
                            {
                                colSpan: 8,
                                border: [false, false, true, false],
                                layout: tableLayouts.withoutPaddingAndLines,
                                table: {
                                    widths: ['*', 'auto'],
                                    body: [
                                        [
                                            {
                                                text: [
                                                    {
                                                        text: 'CERTIFICADO DE INFORMACIÓN LABORAL\n',
                                                        bold: true,
                                                        fontSize: 10,
                                                    },
                                                    {
                                                        text: 'Usar únicamente para certificar tiempos cotizados a Cajas públicas diferentes al ISS o tiempos no cotizados',
                                                        fontSize: 8,
                                                    },
                                                ],
                                                alignment: 'center',
                                            },
                                            {
                                                margin: [2, 4],
                                                table: {
                                                    body: [
                                                        [
                                                            {
                                                                border: [
                                                                    true,
                                                                    true,
                                                                    false,
                                                                    true,
                                                                ],
                                                                text: 'Hoja',
                                                                fontSize: 9,
                                                            },
                                                            {
                                                                border: [
                                                                    false,
                                                                    true,
                                                                    false,
                                                                    true,
                                                                ],
                                                                text: '1',
                                                                fontSize: 9,
                                                            },
                                                            {
                                                                border: [
                                                                    false,
                                                                    true,
                                                                    false,
                                                                    true,
                                                                ],
                                                                text: 'de',
                                                                fontSize: 9,
                                                            },
                                                            {
                                                                border: [
                                                                    false,
                                                                    true,
                                                                    true,
                                                                    true,
                                                                ],
                                                                text: '1',
                                                                fontSize: 9,
                                                            },
                                                        ],
                                                    ],
                                                },
                                            },
                                        ],
                                    ],
                                },
                            },
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                            '',
                        ],
                        [
                            {
                                colSpan: 5,
                                border: [true, false, false, true],
                                text: 'Diligenciar este formato de acuerdo a lo especificado en el instructivo.',
                                margin: [3, 0],
                                bold: true,
                                fontSize: 9,
                            },
                            '',
                            '',
                            '',
                            '',
                            {
                                colSpan: 2,
                                border: [false, false, false, true],
                                text: 'Número consecutivo:',
                                margin: [5, 0],
                                alignment: 'right',
                                fontSize: 9,
                            },
                            '',
                            {
                                colSpan: 2,
                                text: '1',
                                margin: [5, 0],
                                alignment: 'left',
                                fontSize: 9,
                            },
                            '',
                        ],
                    ],
                },
            },
            {
                text: 'A. IDENTIFICACIÓN DE LA ENTIDAD QUE CERTIFICA',
                alignment: 'center',
                bold: true,
                fontSize: 9,
            },
            {
                layout: tableLayouts.withoutPadding,
                table: {
                    widths: '*',
                    body: [
                        [
                            {
                                table: {
                                    widths: ['auto', '*', 'auto', '*'],
                                    body: [
                                        [
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '1. Nombre o Razón Social:',
                                                bold: true,
                                                fontSize: 9,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: 'GERENCIA DE PROYECTOS Y SOLUCIONES GPS',
                                                fontSize: 9,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: '2. NIT',
                                                bold: true,
                                                fontSize: 9,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: 'XXXXXXXXX-X',
                                                fontSize: 9,
                                            },
                                        ],
                                    ],
                                },
                            },
                        ],
                        [
                            {
                                table: {
                                    widths: [
                                        'auto',
                                        '*',
                                        'auto',
                                        '*',
                                        'auto',
                                        '*',
                                    ],
                                    body: [
                                        [
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '3. Dirección:',
                                                bold: true,
                                                fontSize: 9,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: 'Av. Unv # 45 - 102 Oficina',
                                                fontSize: 9,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '4. Ciudad:',
                                                bold: true,
                                                fontSize: 9,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: 'TUNJA',
                                                fontSize: 9,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: 'Código DANE',
                                                bold: true,
                                                fontSize: 9,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '0001',
                                                alignment: 'center',
                                                fontSize: 9,
                                            },
                                        ],
                                    ],
                                },
                            },
                        ],
                    ],
                },
            },
        ],
    };

    var pdfDoc = printer.createPdfKitDocument(docDefinition, {
        tableLayouts: tableLayouts,
    });
    pdfDoc.pipe(fs.createWriteStream('pdfmake.pdf'));
    pdfDoc.end();
});

function mmToPoints(mm: number) {
    const inches = mm / 25.4;
    return inches * 72.0;
}

function emptyTopLeftCell() {
    return {
        border: [true, true, false, false],
        text: '',
    };
}

function emptyTopRightCell() {
    return {
        border: [false, true, true, false],
        text: '',
    };
}

function emptyTopCell() {
    return {
        border: [false, true, false, false],
        text: '',
    };
}

function emptyCell() {
    return {
        border: [false, false, false, false],
        text: '',
    };
}

function generateEqualSizedColumns(amount: number, size: number) {
    return Array(amount).fill(size);
}
