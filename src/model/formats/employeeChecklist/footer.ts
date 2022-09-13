import { DynamicContent } from 'pdfmake/interfaces';
import { fontSizes, smallMarginSize } from '../../../util/constants';
import { es } from '../../../util/lang';
import { smallPadding } from '../../table/tableLayouts';
import { EmployeeCheckListFields } from './fields';

export function generateFooter(
    fields: EmployeeCheckListFields
): DynamicContent {
    return () => {
        return {
            margin: [
                smallMarginSize,
                0
            ],
            layout: smallPadding,
            text: [
                `${es.projected}: ${fields.projected}\n`,
                es.approved
            ],
            alignment: 'center',
            fontSize: fontSizes.normal,
        };
    };
}
