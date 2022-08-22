import * as layouts from '../../table/tableLayouts';
import * as cells from '../../table/cells';
import * as borders from '../../table/borders';

import { fontSizes } from '../../../util/resources';
import { es } from '../../../util/lang';
import { Strings } from '../strings';
import { StringFormatter } from '../../../util/stringFormatter';
import { Formato1Fields, PensionType, Procedure } from '../fields';
import { Content, TableCell } from 'pdfmake/interfaces';
import { TableInfo } from '../tableInfo';
import { dateToString } from '../../table/pdfFunctions';
import { table } from 'console';

export function generateTable8(
    fields: Formato1Fields,
    tableInfo: TableInfo
): Content {
    return {
        layout: layouts.withoutPadding,
        table: {
            widths: ['*'],
            body: [
                [
                    {
                        border: borders.leftTopRightBorder,
                        text: Strings.importantInformation,
                        fontSize: fontSizes.tiny,
                        bold: true,
                        italics: true,
                        alignment: 'center',
                    },
                ],
                [
                    {
                        border: borders.leftRightBorder,
                        table: {
                            widths: [
                                '1%',
                                '26%',
                                '1%',
                                '23%',
                                '1%',
                                '23%',
                                '1%',
                                '23%',
                                '1%',
                            ],
                            body: [
                                [
                                    cells.emptyCell,
                                    {
                                        alignment: 'center',
                                        border: borders.bottomBorder,
                                        text: fields.certificationOfficial,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                    {
                                        alignment: 'center',
                                        border: borders.bottomBorder,
                                        text: fields.officialSignature,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                    {
                                        alignment: 'center',
                                        border: borders.bottomBorder,
                                        text: fields.officialPosition,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                    {
                                        alignment: 'center',
                                        border: borders.bottomBorder,
                                        text: fields.administrativeAct,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                ],
                                [
                                    cells.emptyCell,
                                    {
                                        border: borders.topBorder,
                                        layout: layouts.withoutPadding,
                                        table: {
                                            widths: ['20%', '80%'],
                                            body: [
                                                [
                                                    {
                                                        colSpan: 2,
                                                        alignment: 'center',
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .certificationOfficial,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    cells.emptyCell,
                                                ],
                                                [
                                                    {
                                                        alignment: 'center',
                                                        border: borders.emptyBorder,
                                                        text: es.cc,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: fields.certificationOfficialDocument,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                            ],
                                        },
                                    },
                                    cells.emptyCell,
                                    {
                                        alignment: 'center',
                                        border: borders.emptyBorder,
                                        text: Strings.fields.officialSignature,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                    {
                                        alignment: 'center',
                                        border: borders.emptyBorder,
                                        text: Strings.fields.officialPosition,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                    {
                                        alignment: 'center',
                                        border: borders.emptyBorder,
                                        text: Strings.fields.administrativeAct,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                ],
                            ],
                        },
                    },
                ],
                [
                    {
                        border: borders.leftRightBorder,
                        layout: layouts.smallPadding,
                        table: {
                            widths: ['50%', '50%'],
                            body: [
                                [
                                    {
                                        border: borders.emptyBorder,
                                        alignment: 'right',
                                        text: new StringFormatter(
                                            es.projected
                                        ).addColon().value,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.emptyBorder,
                                        text: fields.projected,
                                        alignment: 'left',
                                        fontSize: fontSizes.tiny,
                                    },
                                ],
                            ],
                        },
                    },
                ],
                [
                    {
                        table: {
                            widths: ['10%', '90%'],
                            body: [
                                [
                                    {
                                        border: borders.leftTopBottomBorder,
                                        rowSpan: 2,
                                        text: es.warning,
                                        fontSize: fontSizes.tiny,
                                        alignment: 'center',
                                    },
                                    {
                                        border: borders.topRightBorder,
                                        text: Strings.warning1,
                                        fontSize: fontSizes.tiny,
                                    },
                                ],
                                [
                                    cells.emptyCell,
                                    {
                                        border: borders.rightBottomBorder,
                                        text: Strings.warning2,
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
