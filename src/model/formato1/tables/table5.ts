import * as layouts from '../../table/tableLayouts';
import * as functions from '../../table/pdfFunctions';
import * as cells from '../../table/cells';
import * as borders from '../../table/borders';

import { fontSizes } from '../../../util/resources';
import { es } from '../../../util/lang';
import { Strings } from '../strings';
import { StringFormatter } from '../../../util/stringFormatter';
import {
    Formato1Fields,
    Formato1LaboralVinculation,
    Formato1PensionContribution,
} from '../fields';
import { Content, TableCell } from 'pdfmake/interfaces';
import { TableInfo } from '../tableInfo';

// This is the max amount of rows the table has currently on the format.
const MAX_CONTRIBUTIONS: number = 7;
const MAX_WORD_LENGTH: number = 20;

export function generateTable5(
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
                                '12%',
                                '17%',
                                '9%',
                                '17%',
                                '9%',
                                '8%',
                            ],
                            body: [
                                [
                                    cells.emptyCell,
                                    {
                                        colSpan: 6,
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            Strings.fields.contributionPeriods
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
                                            Strings.fields.discountSocialSecurity
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        rowSpan: 2,
                                        colSpan: 2,
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            Strings.fields.entityContribution
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    {
                                        rowSpan: 2,
                                        colSpan: 2,
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            Strings.fields.entityPeriod
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                    {
                                        rowSpan: 3,
                                        border: borders.leftTopRightBorder,
                                        alignment: 'center',
                                        text: new StringFormatter(
                                            Strings.fields.entityCertificationPeriod
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
                                    cells.emptyCell,
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
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.name,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.nitOrCode,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.socialReason,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.nit,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    cells.emptyCell,
                                ],
                                ...generatePensionContributions(fields),
                            ],
                        },
                    },
                ],
            ],
        },
    };
}

function generatePensionContributions(fields: Formato1Fields): TableCell[] {
    const pensionContributions: TableCell[] = [];
    if (fields.pensionContributions.length > 7) {
        throw new Error(
            "This should not happen, as the format can't handle more than 7 pension contributions!"
        );
    }

    for (let i = 0; i < MAX_CONTRIBUTIONS; i++) {
        if (fields.pensionContributions[i]) {
            pensionContributions.push(
                generatePensionContributionRow(
                    fields.pensionContributions[i],
                    i
                )
            );
        }
        // If the field is empty, it also has to generate the row, contanining
        // the empty values but with a consecutive number on the table.
        else {
            pensionContributions.push(generateEmptyPensionContributionRow(i));
        }
    }
    return pensionContributions;
}

function generatePensionContributionRow(
    fields: Formato1PensionContribution,
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
            text: fields.contributionPeriod.from.day,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.contributionPeriod.from.month,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.contributionPeriod.from.year,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.contributionPeriod.to.day,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.contributionPeriod.to.month,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.contributionPeriod.to.year,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.hasEmployeeSocialSecurityDiscount ? es.yes : es.no,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.contributionEntity.slice(0, MAX_WORD_LENGTH),
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.contributionEntityNITOrCode,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.respondingEntity,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.respondingEntityNIT,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
        {
            border: borders.leftTopRightBorder,
            text: fields.isRespondingEntityRespondingForPeriod ? es.yes : es.no,
            fontSize: fontSizes.tiny,
            alignment: 'center',
        },
    ];
}

function generateEmptyPensionContributionRow(i: number): TableCell[] {
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
    ];
}
