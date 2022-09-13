import { DynamicContent } from 'pdfmake/interfaces';
import { fontSizes, smallMarginSize } from '../../../util/constants';
import { dateToString } from '../../../util/date';
import { es } from '../../../util/lang';
import { bottomBorder, emptyBorder } from '../../table/borders';
import { emptyCell } from '../../table/cells';
import { smallPadding, withoutPaddingAndLines } from '../../table/tableLayouts';
import { generateTextSmall, generateTextSmallBold } from '../../text/generator';
import { FuidFields } from './fields';
import { Strings } from './strings';

export function generateFooter(
    fields: FuidFields
): DynamicContent {
    return () => {
        return [
            {
                margin: [smallMarginSize, 0, smallMarginSize, 0],
                layout: withoutPaddingAndLines,
                table: {
                    widths: ['28%','8%','28%','8%','28%'],
                    body: [
                        [
                            {
                                layout: smallPadding,
                                table: {
                                    widths: ['*', '*'],
                                    body: [
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${Strings.madeBy}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.name || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.position}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.position || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.signature}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.signature || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.location}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.location || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.date}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy ? dateToString(fields.madeBy.date) : "",
                                                ),
                                            },
                                        ],
                                    ],
                                },
                            },
                            emptyCell,
                            {
                                layout: smallPadding,
                                table: {
                                    widths: ['*', '*'],
                                    body: [
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${Strings.deliveredBy}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.name || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.position}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.position || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.signature}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.signature || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.location}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.location || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.date}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy ? dateToString(fields.madeBy.date) : "",
                                                ),
                                            },
                                        ],
                                    ],
                                },
                            },
                            emptyCell,
                            {
                                layout: smallPadding,
                                table: {
                                    widths: ['*', '*'],
                                    body: [
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${Strings.receivedBy}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.name || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.position}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.position || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.signature}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.signature || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.location}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy?.location || "",
                                                ),
                                            },
                                        ],
                                        [
                                            {
                                                border: emptyBorder,
                                                text: generateTextSmallBold(
                                                    `${es.date}: `
                                                ),
                                            },
                                            {
                                                border: bottomBorder,
                                                text: generateTextSmall(
                                                    fields.madeBy ? dateToString(fields.madeBy.date) : "",
                                                ),
                                            },
                                        ],
                                    ],
                                },
                            },
                        ],
                    ],
                },
            },
            {
                // Small space between the signatures and the note.
                margin: [smallMarginSize, 5, smallMarginSize, 0],
                layout: smallPadding,
                table: {
                    body: [
                        [
                            {
                                text: Strings.note,
                                alignment: "center",
                                fontSize: fontSizes.normal,
                            },
                        ],
                    ],
                },
            }
        ];
    };
}
