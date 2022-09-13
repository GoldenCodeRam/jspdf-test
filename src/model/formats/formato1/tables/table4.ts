import * as layouts from '../../../table/tableLayouts';
import * as functions from '../../../table/functions';
import * as cells from '../../../table/cells';
import * as borders from '../../../table/borders';

import { es } from '../../../../util/lang';
import { Strings } from '../strings';
import { StringFormatter } from '../../../../util/stringFormatter';
import { Formato1Fields, Formato1LaboralVinculation } from '../fields';
import { Content, TableCell } from 'pdfmake/interfaces';
import { TableInfo } from '../tableInfo';
import { fontSizes } from '../../../../util/constants';

// This is the max amount of rows the table has currently on the format.
const MAX_LABOR_LINKS: number = 7;
const MAX_WORD_LENGTH: number = 24;

export function generateTable4(
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
                            widths: [
                                '2%',
                                '4%',
                                '4%',
                                '5%',
                                '4%',
                                '4%',
                                '5%',
                                '18%',
                                '19%',
                                '4%',
                                '4%',
                                '5%',
                                '4%',
                                '4%',
                                '5%',
                                '9%',
                            ],
                            body: [
                                [
                                    cells.emptyCell,
                                    {
                                        colSpan: 6,
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            Strings.fields.employmentPeriods
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    {
                                        rowSpan: 3,
                                        margin: [0, fontSizes.tiny * 2],
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            es.employingEntity
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        rowSpan: 3,
                                        margin: [0, fontSizes.tiny * 2],
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            Strings.fields.positionOrObservations
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        colSpan: 6,
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            Strings.fields.unpaidWorkBreaks
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    {
                                        rowSpan: 3,
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            Strings.fields.totalWorkBreakDays
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                ],
                                [
                                    cells.emptyCell,
                                    {
                                        colSpan: 3,
                                        alignment: 'center',
                                        border: borders.leftTopRightBorder,
                                        text: es.from,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    {
                                        colSpan: 3,
                                        alignment: 'center',
                                        border: borders.leftTopRightBorder,
                                        text: es.to,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    {
                                        colSpan: 3,
                                        alignment: 'center',
                                        border: borders.leftTopRightBorder,
                                        text: es.from,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    {
                                        colSpan: 3,
                                        alignment: 'center',
                                        border: borders.leftTopRightBorder,
                                        text: es.to,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                ],
                                [
                                    cells.emptyCell,
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.day,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.month,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.year,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.day,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.month,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.year,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.day,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.month,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.year,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.day,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.month,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.year,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                ],
                                ...generateLaborLinks(fields),
                            ],
                        },
                    },
                ],
            ],
        },
    };
}

function generateLaborLinks(fields: Formato1Fields): TableCell[] {
    const laborLinks: TableCell[] = [];
    if (fields.laboralVinculations.length > 7) {
        throw new Error(
            "This should not happen, as the format can't handle more than 7 labor links!"
        );
    }

    for (let i = 0; i < MAX_LABOR_LINKS; i++) {
        if (fields.laboralVinculations[i]) {
            laborLinks.push(
                generateLaborLinkRow(fields.laboralVinculations[i], i)
            );
        }
        // If the field is empty, it also has to generate the row, contanining
        // the empty values but with a consecutive number on the table.
        else {
            laborLinks.push(generateEmptyLaborLinkRow(i));
        }
    }
    return laborLinks;
}

function generateLaborLinkRow(
    fields: Formato1LaboralVinculation,
    i: number
): TableCell[] {
    return [
        {
            margin: [2, 2],
            border: borders.leftTopRightBorder,
            text: i + 1,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.vinculation.from.day,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.vinculation.from.month,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.vinculation.from.year,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.vinculation.to.day,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.vinculation.to.month,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.vinculation.to.year,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.employer.slice(0, MAX_WORD_LENGTH),
            fontSize: fontSizes.tiny,
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.position.slice(0, MAX_WORD_LENGTH),
            fontSize: fontSizes.tiny,
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.interruptions ? fields.interruptions.from.day : 'X',
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.interruptions ? fields.interruptions.from.month : 'X',
            alignment: 'center',
            fontSize: fontSizes.tiny,
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.interruptions ? fields.interruptions.from.year : 'X',
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.interruptions ? fields.interruptions.to.day : 'X',
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.interruptions ? fields.interruptions.to.month : 'X',
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.interruptions ? fields.interruptions.to.year : 'X',
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.totalInterruptionDays,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
    ];
}

function generateEmptyLaborLinkRow(i: number): TableCell[] {
    return [
        {
            margin: [2, 2],
            border: borders.fullBorder,
            text: i + 1,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
        cells.emptyFullBorderCell,
    ];
}
