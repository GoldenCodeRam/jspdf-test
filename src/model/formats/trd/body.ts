import { Content, TableCell } from 'pdfmake/interfaces';
import { dateToString } from '../../../util/date';
import { es } from '../../../util/lang';
import { emptyCell } from '../../table/cells';
import {
    generateTextSmall,
    generateTextSmallBoldCenter,
} from '../../text/generator';
import { TrdFields } from './fields';
import { Strings } from './strings';

export function generateBody(fields: TrdFields): Content {
    const body: TableCell[][] = [];

    // Title of the table
    body.push([
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(es.code),
        },
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(Strings.seriesAndTypes),
        },
        {
            colSpan: 2,
            text: generateTextSmallBoldCenter(es.retention),
        },
        emptyCell,
        {
            colSpan: 4,
            text: generateTextSmallBoldCenter(Strings.finalDisposition),
        },
        emptyCell,
        emptyCell,
        emptyCell,
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(Strings.procedures),
        },
    ]);
    body.push([
        emptyCell,
        emptyCell,
        generateTextSmallBoldCenter(Strings.managementFile),
        generateTextSmallBoldCenter(Strings.centralFile),
        generateTextSmallBoldCenter(Strings.ct),
        generateTextSmallBoldCenter(Strings.e),
        generateTextSmallBoldCenter(Strings.m),
        generateTextSmallBoldCenter(Strings.s),
        emptyCell,
    ]);

    fields.items.forEach((item) => {
        body.push([
            generateTextSmall(item.code),
            generateTextSmall(item.series),
            generateTextSmall(item.managementFile),
            generateTextSmall(item.centralFile),
            generateTextSmall(item.ct ? 'X' : ''),
            generateTextSmall(item.e ? 'X' : ''),
            generateTextSmall(item.m ? 'X' : ''),
            generateTextSmall(item.s ? 'X' : ''),
            generateTextSmall(item.procedures),
        ]);
    });

    return {
        table: {
            widths: [
                'auto',
                '*',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                '*',
            ],
            body: body,
        },
    };
}
