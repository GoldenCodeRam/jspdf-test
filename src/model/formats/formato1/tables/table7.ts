import * as layouts from '../../../table/tableLayouts';
import * as cells from '../../../table/cells';
import * as borders from '../../../table/borders';

import { es } from '../../../../util/lang';
import { Strings } from '../strings';
import { StringFormatter } from '../../../../util/stringFormatter';
import { Formato1Fields, PensionType, Procedure } from '../fields';
import { Content } from 'pdfmake/interfaces';
import { TableInfo } from '../tableInfo';
import { dateToString } from '../../../../util/date';
import { fontSizes } from '../../../../util/constants';

export function generateTable7(
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
                            widths: ['70%', '30%'],
                            body: [
                                [
                                    {
                                        border: borders.leftTopBorder,
                                        text: new StringFormatter(
                                            Strings.fields.workerCertificationCompensation
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.topRightBorder,
                                        table: {
                                            widths: ['42%', '5%', '42%', '5%'],
                                            body: [
                                                [
                                                    {
                                                        border: borders.emptyBorder,
                                                        alignment: 'right',
                                                        text: es.yes,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        alignment: 'center',
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .substituteCompensationCertification ==
                                                            Procedure.YES
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: es.no,
                                                        alignment: 'right',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        alignment: 'center',
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .substituteCompensationCertification ==
                                                            Procedure.NO
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                                [
                                                    {
                                                        alignment: 'right',
                                                        border: borders.emptyBorder,
                                                        colSpan: 3,
                                                        text: Strings.fields
                                                            .sustitutiveCompensation,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    cells.emptyCell,
                                                    cells.emptyCell,
                                                    {
                                                        alignment: 'center',
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .substituteCompensationCertification ==
                                                            Procedure.PROCEDING
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                            ],
                                        },
                                    },
                                ],
                                [
                                    {
                                        border: borders.leftBorder,
                                        text: new StringFormatter(
                                            Strings.fields.workerCertificationPension
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                    },
                                    {
                                        border: borders.rightBorder,
                                        table: {
                                            widths: ['66%', '5%', '18%', '5%'],
                                            body: [
                                                [
                                                    {
                                                        border: borders.emptyBorder,
                                                        alignment: 'right',
                                                        text: es.yes,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        alignment: 'center',
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .pensionCertification ==
                                                            Procedure.YES
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: es.no,
                                                        alignment: 'right',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        alignment: 'center',
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .pensionCertification ==
                                                            Procedure.NO
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                                [
                                                    {
                                                        alignment: 'right',
                                                        border: borders.emptyBorder,
                                                        colSpan: 3,
                                                        text: Strings.fields
                                                            .pensionProceding,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    cells.emptyCell,
                                                    cells.emptyCell,
                                                    {
                                                        alignment: 'center',
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .pensionCertification ==
                                                            Procedure.PROCEDING
                                                                ? 'X'
                                                                : '',
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
                        layout: layouts.smallPadding,
                        table: {
                            widths: ['*'],
                            body: [
                                [
                                    {
                                        border: borders.leftRightBorder,
                                        text: new StringFormatter(
                                            Strings.fields.yesPreviousPoint
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
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
                            widths: ['65%', '35%'],
                            body: [
                                [
                                    {
                                        border: borders.leftBottomBorder,
                                        table: {
                                            widths: [
                                                '4%',
                                                '2%',
                                                '30%',
                                                '2%',
                                                '40%',
                                                '2%',
                                                '20%',
                                            ],
                                            body: [
                                                [
                                                    cells.emptyCell,
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.ELD
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .eld,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.INVALID
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .invalidity,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.DEATH
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .death,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                                [
                                                    cells.emptyCell,
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.RETIREMENT
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .retirement,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.SUBSTITUTION
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .substitution,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.GRACE_PENSION
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .gracePension,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                                [
                                                    cells.emptyCell,
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.RETIREMENT_ASSIGNMENT
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .retirementAssignment,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.ISS_CONTRIBUTIONS
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .issContributions,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        text:
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionType ==
                                                            PensionType.ELD_RETIREMENT
                                                                ? 'X'
                                                                : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: Strings.fields
                                                            .eldRetirement,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                            ],
                                        },
                                    },
                                    {
                                        border: borders.rightBottomBorder,
                                        table: {
                                            body: [
                                                [
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: new StringFormatter(
                                                            Strings.fields.pensionResolution
                                                        ).addConsecutiveNumber(
                                                            tableInfo.getConsecutiveFieldNumber()
                                                        ).value,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.bottomBorder,
                                                        text: fields
                                                            .substituteCompensation
                                                            .kindOfPensionCertification
                                                            .pensionResolutionNumber,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                ],
                                                [
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: new StringFormatter(
                                                            Strings.fields.pensionDate
                                                        ).addConsecutiveNumber(
                                                            tableInfo.getConsecutiveFieldNumber()
                                                        ).value,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        border: borders.bottomBorder,
                                                        text: dateToString(
                                                            fields
                                                                .substituteCompensation
                                                                .kindOfPensionCertification
                                                                .pensionDate
                                                        ),
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
                        border: borders.emptyBorder,
                        fillColor: '#D3D3D3',
                        layout: layouts.smallPadding,
                        table: {
                            widths: ['40%', '15%', '45%'],
                            body: [
                                [
                                    {
                                        border: borders.leftBottomBorder,
                                        text: new StringFormatter(
                                            Strings.fields.pensionOtherEntity
                                        ).addConsecutiveNumber(
                                            tableInfo.getConsecutiveFieldNumber()
                                        ).value,
                                        fontSize: fontSizes.tiny,
                                        bold: true,
                                    },
                                    {
                                        border: borders.bottomBorder,
                                        layout: layouts.withoutPadding,
                                        alignment: 'center',
                                        table: {
                                            body: [
                                                [
                                                    {
                                                        margin: [2, 0],
                                                        text: es.yes,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        margin: [5, 0],
                                                        text: fields
                                                            .isMigrantWorker
                                                            .value
                                                            ? 'X'
                                                            : '',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        margin: [0, 2, 0, 0],
                                                        rowSpan: 2,
                                                        border: borders.emptyBorder,
                                                        svg: '<svg width="11.295813mm" height="4.4281044mm" viewBox="0 0 11.295813 4.4281044" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs2" /> <g id="layer1" transform="translate(0,0.84634364)"> <path style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583;stroke-opacity:1" d="m 10,-0.6322915 v 1 l 1,-0.5 z" id="path1789" /> <path style="fill:#000000;stroke:#000000;stroke-width:0.264583;stroke-opacity:1" d="M 0,-0.1322915 H 10" id="path317" /> <path style="fill:none;stroke:#000000;stroke-width:0.264583;stroke-opacity:1" d="m 3,-0.1322915 v 3 h 7" id="path996" /> <path style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583;stroke-opacity:1" d="m 10,-0.6322915 v 1 l 1,-0.5 z m 0,4 v -1 l 1,0.5 z" id="path1478" /> </g> </svg>',
                                                        width: 40,
                                                    },
                                                ],
                                                [
                                                    {
                                                        margin: [2, 0],
                                                        text: es.no,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    {
                                                        margin: [5, 0],
                                                        text: fields
                                                            .isMigrantWorker
                                                            .value
                                                            ? ''
                                                            : 'X',
                                                        fontSize:
                                                            fontSizes.tiny,
                                                    },
                                                    cells.emptyCell,
                                                ],
                                            ],
                                        },
                                    },
                                    {
                                        border: borders.rightBottomBorder,
                                        layout: layouts.smallPadding,
                                        table: {
                                            widths: ['60%', '40%'],
                                            body: [
                                                [
                                                    {
                                                        border: borders.emptyBorder,
                                                        text: new StringFormatter(
                                                            Strings.fields.pensionEntity
                                                        ).addConsecutiveNumber(
                                                            tableInfo.getConsecutiveFieldNumber()
                                                        ).value,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        bold: true,
                                                    },
                                                    {
                                                        border: borders.bottomBorder,
                                                        text: fields
                                                            .substituteCompensation
                                                            .hasOtherEntity
                                                            .otherEntity,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        bold: true,
                                                    },
                                                ],
                                                [
                                                    {
                                                        border: borders.emptyBorder,

                                                        text: new StringFormatter(
                                                            Strings.fields.nitPensionEntity
                                                        ).addConsecutiveNumber(
                                                            tableInfo.getConsecutiveFieldNumber()
                                                        ).value,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        bold: true,
                                                    },
                                                    {
                                                        border: borders.bottomBorder,
                                                        text: fields
                                                            .substituteCompensation
                                                            .hasOtherEntity
                                                            .otherEntityNIT,
                                                        fontSize:
                                                            fontSizes.tiny,
                                                        bold: true,
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
