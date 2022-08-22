export const withoutLines = {
    vLineWidth: function (i: number, node: any) {
        return 0;
    },
    hLineWidth: function (i: number, node: any) {
        return 0;
    },
};
export const withoutPaddingAndLines = {
    vLineWidth: function (i: number, node: any) {
        return 0;
    },
    hLineWidth: function (i: number, node: any) {
        return 0;
    },
    paddingLeft: function (i: number, node: any) {
        return 0;
    },
    paddingRight: function (i: number, node: any) {
        return 0;
    },
    paddingTop: function (i: number, node: any) {
        return 0;
    },
    paddingBottom: function (i: number, node: any) {
        return 0;
    },
};
export const withoutPadding = {
    paddingLeft: function (i: number, node: any) {
        return 0;
    },
    paddingRight: function (i: number, node: any) {
        return 0;
    },
    paddingTop: function (i: number, node: any) {
        return 0;
    },
    paddingBottom: function (i: number, node: any) {
        return 0;
    },
};

export const smallPadding = {
    paddingLeft: function (i: number, node: any) {
        return 1;
    },
    paddingRight: function (i: number, node: any) {
        return 1;
    },
    paddingTop: function (i: number, node: any) {
        return 1;
    },
    paddingBottom: function (i: number, node: any) {
        return 1;
    },
};

export const withoutExternalLines = {
    hLineWidth: function (i: number, node: any) {
        return i === 0 || i === node.table.body.length ? 2 : 1;
    },
    vLineWidth: function (i: number, node: any) {
        return i === 0 || i === node.table.widths?.length ? 0 : 1;
    },
    paddingLeft: function (i: number, node: any) {
        return 1;
    },
    paddingRight: function (i: number, node: any) {
        return 1;
    },
    paddingTop: function (i: number, node: any) {
        return 1;
    },
    paddingBottom: function (i: number, node: any) {
        return 1;
    },
};
