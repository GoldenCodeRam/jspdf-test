import * as layouts from '../../table/tableLayouts';
import * as functions from '../../table/pdfFunctions';
import * as cells from '../../table/cells';
import * as borders from '../../table/borders';

import { fontSizes } from '../../../util/resources';
import { es } from '../../../util/lang';
import { Strings } from '../strings';
import { StringFormatter } from '../../../util/stringFormatter';
import { Formato1Fields } from '../fields';
import { Content, TableCell } from 'pdfmake/interfaces';
import { TableInfo } from '../tableInfo';

export function generateTable6(
    fields: Formato1Fields,
    tableInfo: TableInfo
): Content {
    return {
        layout: layouts.withoutPadding,
        table: {
            widths: ['20%', '15%', '35%', '30%'],
            body: [
                [
                    {
                        margin: [2, fontSizes.tiny],
                        border: borders.leftTopBottomBorder,
                        text: new StringFormatter(
                            Strings.fields.migrantWorker
                        ).addConsecutiveNumber(
                            tableInfo.getConsecutiveFieldNumber()
                        ).value,
                        fontSize: fontSizes.tiny,
                        bold: true,
                    },
                    {
                        margin: [0, 2, 0, 0],
                        border: borders.topBottomBorder,
                        layout: layouts.withoutPadding,
                        alignment: 'center',
                        table: {
                            body: [
                                [
                                    {
                                        margin: [2, 0],
                                        text: es.yes,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        margin: [5, 0],
                                        text: fields.isMigrantWorker.value
                                            ? 'X'
                                            : '',
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        margin: [0, 3, 0, 0],
                                        rowSpan: 2,
                                        border: borders.emptyBorder,
                                        svg: '<svg width="16.295813mm" height="2.3463435mm" viewBox="0 0 16.295813 2.3463435" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs2" /> <g id="layer1" transform="translate(0,0.1322915)"> <path style="fill:none;stroke:#000000;stroke-width:0.264583;stroke-opacity:1" d="m 0,0 h 10 v 1.5 h 5" id="path180" /> <path style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583;stroke-opacity:1" d="M 15,1 V 2 L 16,1.5 Z" id="path1789" /> </g> </svg>',
                                        width: 50,
                                    },
                                ],
                                [
                                    {
                                        margin: [2, 0],
                                        text: es.no,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        margin: [5, 0],
                                        text: fields.isMigrantWorker.value
                                            ? ''
                                            : 'X',
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                ],
                            ],
                        },
                    },
                    {
                        margin: [0, fontSizes.tiny],
                        border: borders.topBottomBorder,
                        text: new StringFormatter(
                            Strings.fields.numberWeeksWorked
                        )
                            .addConsecutiveNumber(
                                tableInfo.getConsecutiveFieldNumber()
                            )
                            .addColon().value,
                        fontSize: fontSizes.tiny,
                        bold: true,
                    },
                    {
                        margin: [0, 5, 0, 0],
                        border: borders.rightTopBottomBorder,
                        table: {
                            body: [
                                [
                                    {
                                        text: fields.isMigrantWorker
                                            .workedWeeks,
                                        fontSize: fontSizes.tiny,
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
