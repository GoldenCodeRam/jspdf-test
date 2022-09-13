import { Content, TableCell } from 'pdfmake/interfaces';
import { es } from '../../../util/lang';
import {
    generateTextNormal,
    generateTextNormalBoldCenter,
    generateTextNormalCenter,
} from '../../text/generator';
import { EmployeeCheckListFields } from './fields';

export function generateBody(fields: EmployeeCheckListFields): Content {
    const body: TableCell[][] = [];

    // Title of the table
    body.push([
        generateTextNormalBoldCenter(es.number),
        generateTextNormalBoldCenter(es.document),
        generateTextNormalBoldCenter(es.date),
        generateTextNormalBoldCenter(es.yes),
        generateTextNormalBoldCenter(es.no),
        generateTextNormalBoldCenter(es.observations),
    ]);

    fields.listRequirements.forEach((requirement, index) => {
        body.push([
            generateTextNormalCenter((index + 1).toString()),
            generateTextNormal(requirement.requirement),
            generateTextNormalCenter(requirement.date ? requirement.date : 'N/A'),
            generateTextNormalCenter(requirement.isLoaded ? 'X' : ''),
            generateTextNormalCenter(requirement.isLoaded ? '' : 'X'),
            generateTextNormal(
                requirement.description ? requirement.description : ''
            ),
        ]);
    });

    return {
        table: {
            widths: ['4%', '32%', '14%', '4%', '4%', '*'],
            body: body,
        },
    };
}
