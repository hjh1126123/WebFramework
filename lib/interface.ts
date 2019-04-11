interface node {
    build($s: any): any;
}

interface page {
    vNode: Array<object>;
    html($h: TemplateStringsArray): any;
}

export { node, page }