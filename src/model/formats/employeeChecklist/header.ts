import { DynamicContent } from 'pdfmake/interfaces';
import { fontSizes, smallMarginSize } from '../../../util/constants';
import { es } from '../../../util/lang';
import { images } from '../../../util/resources';
import { emptyCell } from '../../table/cells';
import { smallPadding } from '../../table/tableLayouts';
import { EmployeeCheckListFields } from './fields';
import { Strings } from './strings';

export function generateHeader(
    fields: EmployeeCheckListFields
): DynamicContent {
    const logoSize = 80;

    return (currentPage, pageCount) => {
        return {
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
                            margin: [0, fontSizes.normal * 1.5, 0, 0],
                            image: images.logoBoyaca,
                            alignment: 'center',
                            width: logoSize,
                        },
                        {
                            rowSpan: 3,
                            margin: [0, fontSizes.normal * 1.5, 0, 0],
                            text: Strings.title,
                            fontSize: fontSizes.normal,
                            alignment: 'center',
                        },
                        {
                            text: fields.dateGeneration,
                            alignment: 'center',
                            fontSize: fontSizes.normal,
                        },
                    ],
                    [
                        emptyCell,
                        emptyCell,
                        {
                            text: [
                                `${fields.fullName}\n`,
                                `${es.number}`,
                                `${es.identification}:`,
                                fields.documentNumber,
                            ],
                            alignment: 'center',
                            fontSize: fontSizes.normal,
                        },
                    ],
                    [
                        emptyCell,
                        emptyCell,
                        {
                            text: `${es.page} ${es.of.toLowerCase()} ${pageCount}`,
                            alignment: 'center',
                            fontSize: fontSizes.normal,
                        },
                    ],
                ],
            },
        };
    };
}
