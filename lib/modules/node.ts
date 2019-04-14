/// <reference path="../lib.ts" />

export default class Node extends lib.IModules implements lib.node {
    TAG_SET = 1;
    PROPS_SET = 2;
    PROPS_ASSIGN = 3;

    MODE_SLASH = 0;
    MODE_TEXT = 1;
    MODE_WHITESPACE = 2;
    MODE_TAGNAME = 3;
    MODE_ATTRIBUTE = 4;

    private h(type: any, props: any, ...children: any) {
        return {
            type,
            props,
            children
        };
    }

    public build(statics: any) {
        const fields = arguments;
        const h = this;

        let mode: any = this.MODE_TEXT;
        let buffer = '';
        let quote = '';
        let current: Array<any> = [0];
        let char, propName: any;

        const commit = (field?: any) => {
            if (mode === this.MODE_TEXT && (field || (buffer = buffer.replace(/^\s*\n\s*|\s*\n\s*$/g, '')))) {
                current.push(field ? fields[field] : buffer);
            } else if (mode === this.MODE_TAGNAME && (field || buffer)) {
                current[1] = field ? fields[field] : buffer;
                mode = this.MODE_WHITESPACE;
            } else if (mode === this.MODE_WHITESPACE && buffer === '...' && field) {
                current[2] = Object.assign(current[2] || {}, fields[field]);
            } else if (mode === this.MODE_WHITESPACE && buffer && !field) {
                (current[2] = current[2] || {})[buffer] = true;
            } else if (mode === this.MODE_ATTRIBUTE && propName) {
                (current[2] = current[2] || {})[propName] = field ? fields[field] : buffer;
                propName = '';
            }
            buffer = '';
        };

        for (let i = 0; i < statics.length; i++) {
            if (i) {
                if (mode === this.MODE_TEXT) {
                    commit();
                }
                commit(i);
            }

            for (let j = 0; j < statics[i].length; j++) {
                char = statics[i][j];
                if (mode === this.MODE_TEXT) {
                    if (char === '<') {
                        commit();
                        current = [current, '', null];
                        mode = this.MODE_TAGNAME;
                    } else {
                        buffer += char;
                    }
                } else if (quote) {
                    if (char === quote) {
                        quote = '';
                    } else {
                        buffer += char;
                    }
                } else if (char === '"' || char === "'") {
                    quote = char;
                } else if (char === '>') {
                    commit();
                    mode = this.MODE_TEXT;
                } else if (!mode) {

                } else if (char === '=') {
                    mode = this.MODE_ATTRIBUTE;
                    propName = buffer;
                    buffer = '';
                } else if (char === '/') {
                    commit();
                    if (mode === this.MODE_TAGNAME) {
                        current = current[0];
                    }
                    mode = current;
                    (current = current[0]).push(this.h.apply(null, mode.slice(1)));
                    mode = this.MODE_SLASH;
                } else if (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
                    commit();
                    mode = this.MODE_WHITESPACE;
                } else {
                    buffer += char;
                }
            }
        }
        commit();

        return current.length > 2 ? current.slice(1) : current[1];
    }
}