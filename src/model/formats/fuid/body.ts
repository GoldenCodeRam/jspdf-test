import { Content, TableCell } from 'pdfmake/interfaces';
import { dateToString } from '../../../util/date';
import { es } from '../../../util/lang';
import { emptyCell } from '../../table/cells';
import {
    generateTextSmall,
    generateTextSmallBoldCenter,
} from '../../text/generator';
import { FuidFields } from './fields';
import { Strings } from './strings';

export function generateBody(fields: FuidFields): Content {
    const body: TableCell[][] = [];

    // Title of the table
    body.push([
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(es.code),
        },
        generateTextSmallBoldCenter(Strings.names),
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(Strings.document),
        },
        {
            colSpan: 2,
            text: generateTextSmallBoldCenter(es.date),
        },
        emptyCell,
        {
            colSpan: 4,
            text: generateTextSmallBoldCenter(Strings.conservationUnit),
        },
        emptyCell,
        emptyCell,
        emptyCell,
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(Strings.invoiceNumber),
        },
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(es.support),
        },
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(Strings.frecuency),
        },
        {
            rowSpan: 2,
            text: generateTextSmallBoldCenter(Strings.notes),
        },
    ]);
    body.push([
        emptyCell,
        generateTextSmallBoldCenter(Strings.series),
        emptyCell,
        generateTextSmallBoldCenter(es.start),
        generateTextSmallBoldCenter(es.end),
        generateTextSmallBoldCenter(es.box),
        generateTextSmallBoldCenter(es.folder),
        generateTextSmallBoldCenter(es.volume),
        generateTextSmallBoldCenter(es.other),
        emptyCell,
        emptyCell,
        emptyCell,
        emptyCell,
    ]);

    fields.items.forEach((item) => {
        body.push([
            generateTextSmall(item.code),
            generateTextSmall(item.name || ""),
            generateTextSmall(item.document || ""),
            generateTextSmall(item.extremeDates ? dateToString(item.extremeDates.from) : ""),
            generateTextSmall(item.extremeDates ? dateToString(item.extremeDates.to) : ""),
            generateTextSmall(item.box ? "X" : ""),
            generateTextSmall(item.folder ? "X" : ""),
            generateTextSmall(item.volume ? "X" : ""),
            generateTextSmall(item.other ? "X" : ""),
            generateTextSmall(item.volumeNumber),
            generateTextSmall(item.support),
            generateTextSmall(item.queryFrecuency),
            generateTextSmall(item.description || ""),
        ]);
    });

    return {
        table: {
            body: body,
        },
    };
}
