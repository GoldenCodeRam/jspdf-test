import { Content } from 'pdfmake/interfaces';
import { fontSizes } from '../../util/constants';

export function generateTextSmallBoldCenter(text: string): Content {
    return {
        text: text,
        alignment: 'center',
        bold: true,
        fontSize: fontSizes.small,
    };
}

export function generateTextSmallCenter(text: string): Content {
    return {
        text: text,
        alignment: 'center',
        fontSize: fontSizes.small,
    };
}

export function generateTextSmallBold(text: string): Content {
    return {
        text: text,
        fontSize: fontSizes.small,
        bold: true,
    };
}

export function generateTextSmall(text: string): Content {
    return {
        text: text,
        fontSize: fontSizes.small,
    };
}

export function generateTextNormalBoldRight(text: string): Content {
    return {
        text: text,
        alignment: 'right',
        bold: true,
        fontSize: fontSizes.normal,
    };
}

export function generateTextNormalBoldCenter(text: string): Content {
    return {
        text: text,
        alignment: 'center',
        bold: true,
        fontSize: fontSizes.normal,
    };
}

export function generateTextNormalCenter(text: string): Content {
    return {
        text: text,
        alignment: 'center',
        fontSize: fontSizes.normal,
    };
}

export function generateTextNormalBold(text: string): Content {
    return {
        text: text,
        fontSize: fontSizes.normal,
        bold: true,
    };
}

export function generateTextNormal(text: string): Content {
    return {
        text: text,
        fontSize: fontSizes.normal,
    };
}
