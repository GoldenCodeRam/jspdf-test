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

export function generateTable1(
    fields: Formato1Fields,
    tableInfo: TableInfo
): Content {
    return {
        layout: layouts.withoutPadding,
        table: {
            widths: '*',
            body: [
                [
                    {
                        layout: layouts.smallPadding,
                        table: {
                            widths: ['auto', '*', 'auto', 'auto'],
                            body: [
                                [
                                    {
                                        border: borders.emptyBorder,
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
                                        border: borders.leftRightBorder,
                                        text: fields.certificationEntity.name,
                                        noWrap: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.rightBorder,
                                        text: new StringFormatter(
                                            es.nit
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.emptyBorder,
                                        text: fields.certificationEntity.NIT,
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
                            widths: ['9%', '35%', 'auto', '*', 'auto', 'auto'],
                            body: [
                                [
                                    {
                                        border: borders.emptyBorder,
                                        text: new StringFormatter(es.address)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftRightBorder,
                                        text: fields.certificationEntity
                                            .address,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.emptyBorder,
                                        text: new StringFormatter(es.city)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftRightBorder,
                                        text: fields.certificationEntity.city,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.emptyBorder,
                                        text: new StringFormatter(
                                            es.daneCode
                                        ).addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftBorder,
                                        text: fields.certificationEntity
                                            .DANECode,
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
                                    cells.emptyCell,
                                    {
                                        border: borders.leftRightBorder,
                                        text: new StringFormatter(es.department)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.emptyBorder,
                                        text: fields.certificationEntity
                                            .department,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftRightBorder,
                                        text: new StringFormatter(
                                            es.daneCode
                                        ).addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.emptyBorder,
                                        text: fields.certificationEntity
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
                            widths: ['auto', '*', 'auto', '*', 'auto', '*'],
                            body: [
                                [
                                    {
                                        border: borders.emptyBorder,
                                        text: new StringFormatter(es.phone)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftRightBorder,
                                        text: fields.certificationEntity.phone,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.emptyBorder,
                                        text: new StringFormatter(es.fax)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftRightBorder,
                                        text: fields.certificationEntity.fax,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.emptyBorder,
                                        text: new StringFormatter(es.email)
                                            .addConsecutiveNumber(
                                                tableInfo.getConsecutiveFieldNumber()
                                            )
                                            .addColon().value,
                                        bold: true,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.leftBorder,
                                        text: fields.certificationEntity.email,
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
