
import { DynamicContent } from 'pdfmake/interfaces';
import { fontSizes, smallMarginSize } from '../../../util/constants';
import { es } from '../../../util/lang';
import { images } from '../../../util/resources';
import { emptyCell } from '../../table/cells';
import { generatePercentageColumns } from '../../table/functions';
import { smallPadding, withoutPaddingAndLines } from '../../table/tableLayouts';
import { generateTextSmall, generateTextSmallBold, generateTextSmallCenter } from '../../text/generator';
import { FuidFields } from './fields';
import { Strings } from './strings';

export function generateHeader(
    fields: FuidFields
): DynamicContent {
    const logoSize = 80;

    return (currentPage, pageCount) => {
        return [
            {
                margin: [
                    smallMarginSize,
                    smallMarginSize,
                    smallMarginSize,
                    0
                ],
                layout: smallPadding,
                table: {
                    widths: [logoSize, '*', '*'],
                    body: [
                        [
                            {
                                rowSpan: 3,
                                margin: [0, fontSizes.normal * 1, 0, 0],
                                image: images.logoBoyaca,
                                alignment: 'center',
                                width: logoSize,
                            },
                            {
                                rowSpan: 3,
                                margin: [0, fontSizes.normal * 1, 0, 0],
                                text: Strings.title,
                                fontSize: fontSizes.normal,
                                alignment: 'center',
                            },
                            {
                                text: `${es.version}: ${Strings.version}`,
                                alignment: 'center',
                                fontSize: fontSizes.normal,
                            },
                        ],
                        [
                            emptyCell,
                            emptyCell,
                            {
                                text: `${es.code}: ${Strings.code}`,
                                alignment: 'center',
                                fontSize: fontSizes.normal,
                            },
                        ],
                        [
                            emptyCell,
                            emptyCell,
                            {
                                text: [
                                    `${es.date}: `,
                                    `${fields.date.day}/`,
                                    `${fields.date.month}/`,
                                    `${fields.date.year}`,
                                ],
                                alignment: 'center',
                                fontSize: fontSizes.normal,
                            },
                        ],
                    ],
                },
            },
            {
                // Small space at the top.
                margin: [smallMarginSize, 5, smallMarginSize, 0],
                layout: withoutPaddingAndLines,
                table: {
                    widths: ['42%', '28%', '30%'],
                    body: [
                        [
                            {
                                layout: smallPadding,
                                table: {
                                    widths: ["40%", "60%"],
                                    body: [
                                        [
                                            {
                                                text: generateTextSmallBold(
                                                    `${Strings.sendingEntity}: `
                                                ),
                                            },
                                            {
                                                text: generateTextSmall(fields.sendingEntity || ""),
                                            },
                                        ],
                                        [
                                            {
                                                text: generateTextSmallBold(
                                                    `${Strings.producingEntity}: `
                                                ),
                                            },
                                            {
                                                text: generateTextSmall(fields.producingEntity || ""),
                                            },
                                        ],
                                        [
                                            {
                                                text: generateTextSmallBold(
                                                    `${Strings.administrativeUnit}: `
                                                ),
                                            },
                                            {
                                                text: generateTextSmall(fields.administrativeUnit || ""),
                                            },
                                        ],
                                        [
                                            {
                                                text: generateTextSmallBold(
                                                    `${Strings.productionOffice}: `
                                                ),
                                            },
                                            {
                                                text: generateTextSmall(fields.productionOffice || ""),
                                            },
                                        ],
                                        [
                                            {
                                                text: generateTextSmallBold(
                                                    `${es.object}: `
                                                ),
                                            },
                                            {
                                                text: generateTextSmall(fields.object || ""),
                                            },
                                        ],
                                    ],
                                },
                            },
                            emptyCell,
                            {
                                layout: smallPadding,
                                table: {
                                    widths: generatePercentageColumns(4, "25%"),
                                    body: [
                                        [
                                            {
                                                colSpan: 4,
                                                text: `${es.page} ${es.of.toLowerCase()} ${pageCount}`,
                                                alignment: "center",
                                                fontSize: fontSizes.small,
                                            },
                                            emptyCell,
                                            emptyCell,
                                            emptyCell,
                                        ],
                                        [
                                            {
                                                colSpan: 4,
                                                text: generateTextSmallCenter(Strings.entranceRegistry),
                                            },
                                            emptyCell,
                                            emptyCell,
                                            emptyCell,
                                        ],
                                        [
                                            {
                                                text: generateTextSmallCenter(es.year),
                                            },
                                            {
                                                text: generateTextSmallCenter(es.month),
                                            },
                                            {
                                                text: generateTextSmallCenter(es.day),
                                            },
                                            {
                                                text: generateTextSmallCenter(Strings.nt),
                                            },
                                        ],
                                        [
                                            {
                                                text: generateTextSmallCenter(fields.date.year.toString()),
                                            },
                                            {
                                                text: generateTextSmallCenter(fields.date.month.toString()),
                                            },
                                            {
                                                text: generateTextSmallCenter(fields.date.day.toString()),
                                            },
                                            {
                                                text: generateTextSmallCenter(fields.transferNumber || ''),
                                            },
                                        ],
                                        [
                                            {
                                                colSpan: 4,
                                                text: generateTextSmall(Strings.ntExplanation),
                                                alignment: "right",
                                            },
                                            emptyCell,
                                            emptyCell,
                                            emptyCell,
                                        ],
                                    ],
                                },
                            },
                        ],
                    ],
                },
            },
        ];
    };
}
