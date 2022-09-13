import { DynamicContent } from 'pdfmake/interfaces';
import { fontSizes, smallMarginSize } from '../../../util/constants';
import { es } from '../../../util/lang';
import { images } from '../../../util/resources';
import { emptyBorder } from '../../table/borders';
import { emptyCell } from '../../table/cells';
import { generatePercentageColumns } from '../../table/functions';
import { smallPadding, withoutPaddingAndLines } from '../../table/tableLayouts';
import {
    generateTextNormalBold,
    generateTextNormalBoldRight,
    generateTextNormalCenter,
    generateTextSmall,
    generateTextSmallBold,
    generateTextSmallCenter,
} from '../../text/generator';
import { TrdFields } from './fields';
import { Strings } from './strings';

export function generateHeader(fields: TrdFields): DynamicContent {
    return (currentPage, pageCount) => {
        return [
            {
                // This is so the text is not all the way up to the border of the
                // page.
                margin: [smallMarginSize, smallMarginSize, smallMarginSize, 0],
                text: generateTextNormalCenter(Strings.title),
            },
            {
                text: generateTextNormalCenter(Strings.subtitle.toUpperCase()),
            },
            {
                margin: [smallMarginSize, 5, smallMarginSize, 0],
                layout: smallPadding,
                table: {
                    widths: ['60%', '40%'],
                    body: [
                        [
                            {
                                text: generateTextNormalBoldRight(
                                    Strings.producingEntity
                                ),
                            },
                            {
                                text: generateTextNormalBold(
                                    fields.producingEntity
                                ),
                            },
                        ],
                        [
                            {
                                text: generateTextNormalBoldRight(
                                    Strings.producingOffice
                                ),
                            },
                            {
                                text: generateTextNormalBold(
                                    fields.producingOffice
                                ),
                            },
                        ],
                    ],
                },
            },
        ];
    };
}
