import { DynamicContent } from 'pdfmake/interfaces';
import { smallMarginSize } from '../../../util/constants';
import { dateToString } from '../../../util/date';
import { es } from '../../../util/lang';
import { emptyCell } from '../../table/cells';
import { smallPadding } from '../../table/tableLayouts';
import {
    generateTextNormalBold,
    generateTextNormalBoldCenter,
} from '../../text/generator';
import { TrdFields } from './fields';
import { Strings } from './strings';

export function generateFooter(fields: TrdFields): DynamicContent {
    return () => {
        return [
            {
                margin: [smallMarginSize, 0, smallMarginSize, 0],
                layout: smallPadding,
                table: {
                    widths: ['30%', '40%', '30%'],
                    body: [
                        [
                            {
                                text: generateTextNormalBoldCenter(
                                    Strings.conventions
                                ),
                            },
                            emptyCell,
                            emptyCell,
                        ],
                        [
                            {
                                text: generateTextNormalBold(
                                    Strings.ctExplanation
                                ),
                            },
                            {
                                colSpan: 2,
                                text: generateTextNormalBold(
                                    `${Strings.responsibleSignature}: ${fields.responsibleSignature}`
                                ),
                            },
                            emptyCell,
                        ],
                        [
                            {
                                text: generateTextNormalBold(
                                    Strings.eExplanation
                                ),
                            },
                            emptyCell,
                            {
                                text: generateTextNormalBold(es.responsible),
                            },
                        ],
                        [
                            {
                                text: generateTextNormalBold(
                                    Strings.mExplanation
                                ),
                            },
                            emptyCell,
                            emptyCell,
                        ],
                        [
                            {
                                text: generateTextNormalBold(
                                    Strings.sExplanation
                                ),
                            },
                            {
                                colSpan: 2,
                                text: generateTextNormalBold(
                                    `${es.date}: ${dateToString(fields.date)}`
                                ),
                            },
                            emptyCell,
                        ],
                    ],
                },
            },
        ];
    };
}
