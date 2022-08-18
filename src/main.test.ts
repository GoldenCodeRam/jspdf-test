import { jsPDF } from 'jspdf';
import pdfMake from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

test.skip('jsPDF PDF generation test.', () => {
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

    const fontSizeBig = 10;
    const fontSizeMedium = 9;
    const fontSizeSmall = 8;

    const cellHeight = 8;

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
                    widths: generatePercentageColumns(9, '11.11%'),
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
                                fontSize: fontSizeBig,
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
                                fontSize: fontSizeBig,
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
                                                        fontSize:
                                                            fontSizeMedium,
                                                    },
                                                    {
                                                        text: 'TUNJA, 03 de enero de 2019',
                                                        alignment: 'right',
                                                        fontSize:
                                                            fontSizeMedium,
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
                                colSpan: fontSizeSmall,
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
                                                        fontSize: fontSizeBig,
                                                    },
                                                    {
                                                        text: 'Usar únicamente para certificar tiempos cotizados a Cajas públicas diferentes al ISS o tiempos no cotizados',
                                                        fontSize: fontSizeSmall,
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
                                                                fontSize:
                                                                    fontSizeMedium,
                                                            },
                                                            {
                                                                border: [
                                                                    false,
                                                                    true,
                                                                    false,
                                                                    true,
                                                                ],
                                                                text: '1',
                                                                fontSize:
                                                                    fontSizeMedium,
                                                            },
                                                            {
                                                                border: [
                                                                    false,
                                                                    true,
                                                                    false,
                                                                    true,
                                                                ],
                                                                text: 'de',
                                                                fontSize:
                                                                    fontSizeMedium,
                                                            },
                                                            {
                                                                border: [
                                                                    false,
                                                                    true,
                                                                    true,
                                                                    true,
                                                                ],
                                                                text: '1',
                                                                fontSize:
                                                                    fontSizeMedium,
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
                                fontSize: fontSizeMedium,
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
                                fontSize: fontSizeMedium,
                            },
                            '',
                            {
                                colSpan: 2,
                                text: '1',
                                margin: [5, 0],
                                alignment: 'left',
                                fontSize: fontSizeMedium,
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
                fontSize: fontSizeSmall,
            },
            {
                layout: tableLayouts.withoutPadding,
                table: {
                    widths: '*',
                    body: [
                        [
                            {
                                table: {
                                    widths: ['20%', '60%', '5%', '15%'],
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
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: 'GERENCIA DE PROYECTOS Y SOLUCIONES GPS',
                                                noWrap: true,
                                                fontSize: fontSizeSmall,
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
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '900921344-5',
                                                fontSize: fontSizeSmall,
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
                                        '11%',
                                        '19%',
                                        '9%',
                                        '42%',
                                        '10%',
                                        '9%',
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
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: 'Av. Unv # 45 - 102 Oficina',
                                                fontSize: fontSizeSmall,
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
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: 'TUNJA',
                                                fontSize: fontSizeSmall,
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
                                                fontSize: fontSizeSmall,
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
                                                fontSize: fontSizeSmall,
                                            },
                                        ],
                                    ],
                                },
                            },
                        ],
                        [
                            {
                                table: {
                                    widths: ['29%', '14%', '43%', '10%', '4%'],
                                    body: [
                                        [
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '',
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: '5. Departamento:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: 'BOYACÁ',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: 'Código DANE',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '15',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
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
                                        '10%',
                                        '19%',
                                        '6%',
                                        '21%',
                                        '8%',
                                        '36%',
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
                                                text: '6. Teléfono:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: '745 2923',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '7. Fax:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    true,
                                                    false,
                                                ],
                                                text: '',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: '8. E-Mail:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    false,
                                                    false,
                                                    false,
                                                ],
                                                text: 'info@gerprosol.com',
                                                fontSize: fontSizeSmall,
                                            },
                                        ],
                                    ],
                                },
                            },
                        ],
                    ],
                },
            },
            {
                text: 'B. IDENTIFICACIÓN DEL EMPLEADOR POR EL CUAL SE CERTIFICA TIEMPO',
                alignment: 'center',
                bold: true,
                fontSize: fontSizeSmall,
            },
            {
                layout: tableLayouts.withoutPaddingAndLines,
                table: {
                    widths: ['*'],
                    body: [
                        [
                            {
                                table: {
                                    widths: ['22%', '55%', '6%', '17%'],
                                    body: [
                                        [
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: '9. Nombre o Razón Social:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'GERENCIA DE PROYECTOS Y SOLUCIONES',
                                                noWrap: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: '10. NIT',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: '90021344-5',
                                                fontSize: fontSizeSmall,
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
                                        '11%',
                                        '20%',
                                        '9%',
                                        '41%',
                                        '10%',
                                        '9%',
                                    ],
                                    body: [
                                        [
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: '11. Dirección:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'AVENIDA UNIVERSITARIA #',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: '12. Ciudad:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'TUNJA',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: 'Código DANE',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: '0001',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
                                            },
                                        ],
                                    ],
                                },
                            },
                        ],
                        [
                            {
                                table: {
                                    widths: ['29%', '14%', '43%', '10%', '4%'],
                                    body: [
                                        [
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: '',
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: '13. Departamento:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: 'BOYACÁ',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'Código DANE',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: '15',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
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
                                        '8%',
                                        '2%',
                                        '32%',
                                        '11%',
                                        '12%',
                                        '17%',
                                        '6%',
                                        '6%',
                                        '6%',
                                    ],
                                    body: [
                                        [
                                            {
                                                rowSpan: 3,
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    true,
                                                ],
                                                text: '14. Sector (Marcar solo uno).',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: '',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'Sector Público Nacional',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: '15. E-Mail:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                colSpan: 5,
                                                border: [
                                                    false,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'gerencia@gerprosol.com',
                                                fontSize: fontSizeSmall,
                                            },
                                            '',
                                            '',
                                            '',
                                            '',
                                        ],
                                        [
                                            '',
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: 'X',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'Sector Público Departamental o Distrital',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: '16. Teléfono:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: '3163554130',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                rowSpan: 2,
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    true,
                                                ],
                                                text: '18. Fecha en que entró en vigencia el SGP para ese empleador.',
                                                italics: true,
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'Día',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    false,
                                                    false,
                                                ],
                                                text: 'Mes',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    false,
                                                ],
                                                text: 'Año',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                        ],
                                        [
                                            '',
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    true,
                                                ],
                                                text: '',
                                                alignment: 'center',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    true,
                                                ],
                                                text: 'Sector Público Municipal',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    true,
                                                ],
                                                text: '17. Fax:',
                                                bold: true,
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    false,
                                                    true,
                                                    false,
                                                    true,
                                                ],
                                                text: '',
                                                fontSize: fontSizeSmall,
                                            },
                                            '',
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    true,
                                                ],
                                                text: '01',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    false,
                                                    true,
                                                ],
                                                text: '01',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
                                            },
                                            {
                                                border: [
                                                    true,
                                                    true,
                                                    true,
                                                    true,
                                                ],
                                                text: '1996',
                                                alignment: 'center',
                                                fontSize: fontSizeSmall,
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
    const inches = mm * 0.03937;
    return inches * 72;
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

function generatePercentageColumns(amount: number, percentage: string) {
    return Array(amount).fill(percentage);
}
