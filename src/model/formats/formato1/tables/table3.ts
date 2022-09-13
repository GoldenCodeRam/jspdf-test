import * as layouts from '../../../table/tableLayouts';
import * as functions from '../../../table/functions';
import * as cells from '../../../table/cells';
import * as borders from '../../../table/borders';

import { es } from '../../../../util/lang';
import { Strings } from '../strings';
import { StringFormatter } from '../../../../util/stringFormatter';
import { Document, Formato1Fields, Sector } from '../fields';
import { Content } from 'pdfmake/interfaces';
import { TableInfo } from '../tableInfo';
import { fontSizes } from '../../../../util/constants';

export function generateTable3(
    fields: Formato1Fields,
    tableInfo: TableInfo
): Content {
    return {
        layout: layouts.withoutPaddingAndLines,
        table: {
            widths: ['*'],
            body: [
                [
                    {
                        layout: layouts.withoutPadding,
                        table: {
                            widths: ['53%', '31%', '16%'],
                            body: [
                                [
                                    {
                                        margin: [2, 2],
                                        border: borders.leftTopBorder,
                                        text: new StringFormatter(
                                            Strings.fields.fullName
                                        )
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber(
                                                    19
                                                )
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        margin: [2, 2],
                                        border: borders.leftTopRightBorder,
                                        text: new StringFormatter(
                                            es.identityDocument
                                        )
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        margin: [2, 2],
                                        border: borders.topRightBorder,
                                        text: new StringFormatter(
                                            Strings.fields.optionalBirthdate
                                        )
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                ],
                                [
                                    {
                                        margin: [2, 2],
                                        border: borders.leftTopBottomBorder,
                                        text: fields.worker.name.toUpperCase(),
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopBottomBorder,
                                        layout: layouts.withoutExternalLines,
                                        table: {
                                            widths: [
                                                '15%',
                                                '10%',
                                                '15%',
                                                '10%',
                                                '15%',
                                                '10%',
                                                '15%',
                                                '10%',
                                            ],
                                            body: [
                                                [
                                                    {
                                                        border: borders.rightBottomBorder,
                                                        text: es.ti,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.rightBottomBorder,
                                                        text:
                                                            fields.worker
                                                                .documentType ==
                                                            Document.TI
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.rightBottomBorder,
                                                        text: es.cc,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.rightBottomBorder,
                                                        text:
                                                            fields.worker
                                                                .documentType ==
                                                            Document.CC
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.rightBottomBorder,
                                                        text: es.ce,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.rightBottomBorder,
                                                        text:
                                                            fields.worker
                                                                .documentType ==
                                                            Document.CE
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.rightBottomBorder,
                                                        text: es.nit,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.bottomBorder,
                                                        text:
                                                            fields.worker
                                                                .documentType ==
                                                            Document.NIT
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                ],
                                                [
                                                    {
                                                        border: borders.rightBorder,
                                                        text: new StringFormatter(
                                                            es.number
                                                        ).addColon().value,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        colSpan: 7,
                                                        border: borders.emptyBorder,
                                                        text: fields.worker
                                                            .document,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    cells.emptyCell,
                                                    cells.emptyCell,
                                                    cells.emptyCell,
                                                    cells.emptyCell,
                                                    cells.emptyCell,
                                                    cells.emptyCell,
                                                ],
                                            ],
                                        },
                                    },
                                    {
                                        border: borders.fullBorder,
                                        layout: layouts.withoutExternalLines,
                                        table: {
                                            widths: ['*', '*', '*'],
                                            body: [
                                                [
                                                    {
                                                        border: borders.bottomBorder,
                                                        text: es.day,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.leftBottomRightBorder,
                                                        text: es.month,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.bottomBorder,
                                                        text: es.year,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                                [
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: fields.worker
                                                            .birthdate
                                                            ? fields.worker
                                                                  .birthdate.day
                                                            : '',
                                                        alignment: 'center',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.leftRightBorder,
                                                        text: fields.worker
                                                            .birthdate
                                                            ? fields.worker
                                                                  .birthdate
                                                                  .month
                                                            : '',
                                                        alignment: 'center',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: fields.worker
                                                            .birthdate
                                                            ? fields.worker
                                                                  .birthdate
                                                                  .year
                                                            : '',
                                                        alignment: 'center',
                                                        fontSize:
                                                            fontSizes.tiny,
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
                [
                    {
                        fillColor: '#D3D3D3',
                        table: {
                            widths: ['*'],
                            body: [
                                [
                                    {
                                        border: borders.leftBottomRightBorder,
                                        text: Strings.titleC1,
                                        bold: true,
                                        alignment: 'center',
                                        fontSize: fontSizes.tiny,
                                    },
                                ],
                            ],
                        },
                    },
                ],
                [
                    {
                        fillColor: '#D3D3D3',
                        layout: layouts.withoutPadding,
                        table: {
                            widths: ['53%', '31%', '16%'],
                            body: [
                                [
                                    {
                                        margin: [2, 2],
                                        border: borders.leftBorder,
                                        text: new StringFormatter(
                                            Strings.fields.fullName
                                        )
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        margin: [2, 2],
                                        border: borders.leftRightBorder,
                                        text: new StringFormatter(
                                            Strings.fields.alternateDocumentType
                                        )
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        margin: [2, 2],
                                        border: borders.rightBorder,
                                        text: new StringFormatter(
                                            Strings.fields.numberAlternateDocument
                                        )
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                ],
                                [
                                    {
                                        margin: [2, 2],
                                        border: borders.leftTopBottomBorder,
                                        text: fields.worker.alternateName,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopBottomBorder,
                                        layout: layouts.withoutExternalLines,
                                        table: {
                                            widths: [
                                                '15%',
                                                '10%',
                                                '15%',
                                                '10%',
                                                '15%',
                                                '10%',
                                                '15%',
                                                '10%',
                                            ],
                                            body: [
                                                [
                                                    {
                                                        border: borders.rightBorder,
                                                        text: es.ti,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.rightBorder,
                                                        text:
                                                            fields.worker
                                                                .alternateDocumentType ==
                                                            Document.TI
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.rightBorder,
                                                        text: es.cc,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.rightBorder,
                                                        text:
                                                            fields.worker
                                                                .alternateDocumentType ==
                                                            Document.CC
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.rightBorder,
                                                        text: es.ce,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.rightBorder,
                                                        text:
                                                            fields.worker
                                                                .alternateDocumentType ==
                                                            Document.CE
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.rightBorder,
                                                        text: es.nit,
                                                        bold: true,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text:
                                                            fields.worker
                                                                .alternateDocumentType ==
                                                            Document.NIT
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        alignment: 'center',
                                                    },
                                                ],
                                            ],
                                        },
                                    },
                                    {
                                        border: borders.fullBorder,
                                        layout: layouts.withoutExternalLines,
                                        table: {
                                            widths: ['*'],
                                            body: [
                                                [
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: fields.worker
                                                            .alternateDocument,
                                                        fontSize:
                                                            fontSizes.tiny,
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
            ],
        },
    };
}
