import * as layouts from '../../table/tableLayouts';
import * as functions from '../../table/pdfFunctions';
import * as cells from '../../table/cells';
import * as borders from '../../table/borders';

import { fontSizes, images } from '../../../util/resources';
import { es } from '../../../util/lang';
import { Strings } from '../strings';
import { StringFormatter } from '../../../util/stringFormatter';
import { Formato1Fields } from '../fields';
import { Content } from 'pdfmake/interfaces';
import { TableInfo } from '../tableInfo';

export function generateTitleTable(
    fields: Formato1Fields,
    tableInfo: TableInfo
): Content {
    return {
        layout: layouts.withoutPadding,
        table: {
            widths: functions.generatePercentageColumns(9, '11.11%'),
            body: [
                [
                    {
                        rowSpan: 3,
                        border: borders.leftTopBorder,
                        image: images.colombianShield,
                        alignment: 'center',
                        margin: [0, 5],
                        width: 40,
                    },
                    cells.emptyTopCell,
                    cells.emptyTopCell,
                    {
                        colSpan: 3,
                        border: borders.topBorder,
                        text: es.colombia.toUpperCase(),
                        fontSize: fontSizes.small,
                        bold: true,
                        alignment: 'center',
                    },
                    cells.emptyTopCell,
                    cells.emptyTopCell,
                    cells.emptyTopCell,
                    cells.emptyTopCell,
                    cells.emptyTopRightCell,
                ],
                [
                    cells.emptyCell,
                    cells.emptyCell,
                    cells.emptyCell,
                    {
                        colSpan: 3,
                        border: borders.emptyBorder,
                        text: Strings.titleBlock.title,
                        fontSize: fontSizes.small,
                        bold: true,
                        margin: [0, fontSizes.small, 0, 0],
                        alignment: 'center',
                    },
                    cells.emptyCell,
                    cells.emptyCell,
                    {
                        colSpan: 3,
                        alignment: 'center',
                        layout: layouts.withoutLines,
                        table: {
                            widths: ['*'],
                            body: [
                                [
                                    {
                                        text: [
                                            {
                                                // Add line feed to the end of the line
                                                text: new StringFormatter(
                                                    Strings.titleBlock.certificationCityAndDate
                                                ).addLineFeed().value,
                                                alignment: 'right',
                                                bold: true,
                                                fontSize: fontSizes.tiny,
                                            },
                                            {
                                                text: `${fields.certificationCityAndDate.city} - ${functions.dateToString(fields.certificationCityAndDate.date)}`,
                                                alignment: 'right',
                                                fontSize: fontSizes.tiny,
                                            },
                                        ],
                                    },
                                ],
                            ],
                        },
                    },
                    cells.emptyCell,
                    cells.emptyCell,
                ],
                [
                    cells.emptyCell,
                    {
                        colSpan: 8,
                        border: borders.rightBorder,
                        layout: layouts.withoutPaddingAndLines,
                        table: {
                            widths: ['*', 'auto'],
                            body: [
                                [
                                    {
                                        text: [
                                            {
                                                // Add line feed to the end of the line
                                                text: new StringFormatter(
                                                    Strings.titleBlock.subtitle
                                                ).addLineFeed().value,
                                                bold: true,
                                                fontSize: fontSizes.small,
                                            },
                                            {
                                                text: Strings.titleBlock
                                                    .description,
                                                fontSize: fontSizes.tiny,
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
                                                        border: borders.leftTopBottomBorder,
                                                        text: es.page,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.topBottomBorder,
                                                        text: tableInfo.currentPage,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.topBottomBorder,
                                                        text: es.of.toLowerCase(),
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.rightTopBottomBorder,
                                                        text: tableInfo.pageCount,
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
                    cells.emptyCell,
                    cells.emptyCell,
                    cells.emptyCell,
                    cells.emptyCell,
                    cells.emptyCell,
                    cells.emptyCell,
                    cells.emptyCell,
                ],
                [
                    {
                        colSpan: 5,
                        border: borders.leftBottomBorder,
                        text: Strings.titleBlock.fillDescription,
                        margin: [3, 0],
                        bold: true,
                        fontSize: fontSizes.smaller,
                    },
                    cells.emptyCell,
                    cells.emptyCell,
                    cells.emptyCell,
                    cells.emptyCell,
                    {
                        colSpan: 2,
                        border: borders.bottomBorder,
                        text: new StringFormatter(
                            es.consecutiveNumber
                        ).addColon().value,
                        margin: [5, 0],
                        alignment: 'right',
                        fontSize: fontSizes.smaller,
                    },
                    cells.emptyCell,
                    {
                        colSpan: 2,
                        text: fields.consecutiveNumber,
                        margin: [5, 0],
                        alignment: 'left',
                        fontSize: fontSizes.smaller,
                    },
                    cells.emptyCell,
                ],
            ],
        },
    };
}
