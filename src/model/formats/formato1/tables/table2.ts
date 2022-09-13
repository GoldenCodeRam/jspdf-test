import * as layouts from '../../../table/tableLayouts';
import * as functions from '../../../table/functions';
import * as cells from '../../../table/cells';
import * as borders from '../../../table/borders';

import { images } from '../../../../util/resources';
import { es } from '../../../../util/lang';
import { Strings } from '../strings';
import { StringFormatter } from '../../../../util/stringFormatter';
import { Formato1Fields, Sector } from '../fields';
import { Content } from 'pdfmake/interfaces';
import { TableInfo } from '../tableInfo';
import { fontSizes } from '../../../../util/constants';

export function generateTable2(
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
                        layout: layouts.smallPadding,
                        table: {
                            widths: ['auto', '*', 'auto', 'auto'],
                            body: [
                                [
                                    {
                                        border: borders.leftTopBorder,
                                        text: new StringFormatter(
                                            Strings.fields.nameOrSocialReason
                                        )
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: fields.employer.name,
                                        noWrap: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topRightBorder,
                                        text: new StringFormatter(es.nit)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topRightBorder,
                                        text: '90021344-5',
                                        fontSize: fontSizes.tiny,
                                    },
                                ],
                            ],
                        },
                    },
                ],
                [
                    {
                        layout: layouts.smallPadding,
                        table: {
                            widths: ['10%', '34%', 'auto', '*', 'auto', 'auto'],
                            body: [
                                [
                                    {
                                        border: borders.leftTopBorder,
                                        text: new StringFormatter(es.address)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: fields.employer.address,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topBorder,
                                        text: new StringFormatter(es.city)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: fields.employer.city,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topBorder,
                                        text: new StringFormatter(
                                            es.daneCode
                                        ).addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: fields.employer.DANECode,
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
                        layout: layouts.smallPadding,
                        table: {
                            widths: ['45%', 'auto', '*', 'auto', 'auto'],
                            body: [
                                [
                                    cells.emptyLeftTopRightCell,
                                    {
                                        border: borders.topBorder,
                                        text: new StringFormatter(es.department)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: fields.employer.department,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topBorder,
                                        text: new StringFormatter(
                                            es.daneCode
                                        ).addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: fields.employer
                                            .departmentDANECode,
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
                        layout: layouts.smallPadding,
                        table: {
                            widths: [
                                '8%',
                                '2%',
                                '32%',
                                '11%',
                                '*',
                                '*',
                                'auto',
                                'auto',
                                'auto',
                            ],
                            body: [
                                [
                                    {
                                        rowSpan: 3,
                                        border: borders.leftTopBottomBorder,
                                        text: new StringFormatter(
                                            Strings.fields.sector
                                        )
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        alignment: 'center',
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        // Mark with an X if it is the national public sector.
                                        border: borders.leftTopRightBorder,
                                        text:
                                            fields.employer.sector ==
                                            Sector.NATIONAL_PUBLIC_SECTOR
                                                ? 'X'
                                                : '',
                                        alignment: 'center',
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topBorder,
                                        text: new StringFormatter(
                                            Strings.fields.nationalPublicSector
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopBorder,
                                        text: new StringFormatter(es.email)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        colSpan: 5,
                                        border: borders.topRightBorder,
                                        text: fields.employer.email,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                    cells.emptyCell,
                                ],
                                [
                                    cells.emptyCell,
                                    {
                                        border: borders.leftTopBorder,
                                        text:
                                            fields.employer.sector ==
                                            Sector.DISTRITAL_OR_DEPARTAMENTAL_PUBLIC_SECTOR
                                                ? 'X'
                                                : '',
                                        alignment: 'center',
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: new StringFormatter(
                                            Strings.fields.distritalOrDepartamentalPublicSector
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topBorder,
                                        text: new StringFormatter(es.phone)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topBorder,
                                        text: fields.employer.phone,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        rowSpan: 2,
                                        border: borders.fullBorder,
                                        text: new StringFormatter(
                                            Strings.fields.dateSGP
                                        ).addConsecutiveNumber(
                                            // I had to insert this because the order of the fields
                                            // is not correct and as how we do the
                                            // tables, this is the simplest approach, I think.
                                            tableInfo.getConsecutiveFieldNumber(
                                                18
                                            )
                                        ).value,
                                        italics: true,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.day,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topBorder,
                                        text: es.month,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopRightBorder,
                                        text: es.year,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                ],
                                [
                                    cells.emptyCell,
                                    {
                                        border: borders.leftTopBottomBorder,
                                        text:
                                            fields.employer.sector ==
                                            Sector.MUNICIPAL_PUBLIC_SECTOR
                                                ? 'X'
                                                : '',
                                        alignment: 'center',
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopBottomBorder,
                                        text: new StringFormatter(
                                            Strings.fields.municipalPublicSector
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopBottomBorder,
                                        text: new StringFormatter(es.fax)
                                            .addConsecutiveNumber(
                                                // I had to insert this because the order of the fields
                                                // is not correct and as how we do the
                                                // tables, this is the simplest approach, I think.
                                                tableInfo.getConsecutiveFieldNumber(
                                                    17
                                                )
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topBottomBorder,
                                        text: fields.employer.fax,
                                        fontSize: fontSizes.tiny,
                                    },
                                    cells.emptyCell,
                                    {
                                        border: borders.leftTopBottomBorder,
                                        text: fields.employer.SGPDate.day,
                                        alignment: 'center',
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftTopBottomBorder,
                                        text: fields.employer.SGPDate.month,
                                        alignment: 'center',
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.fullBorder,
                                        text: fields.employer.SGPDate.year,
                                        alignment: 'center',
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
