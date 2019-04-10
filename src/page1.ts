function html(a: TemplateStringsArray): string {
    return a[0].replace(/[\r\n]/g, '');
}

const innerText: any = html`<div class="header">
    <p>
        {{name}}
        <p>
            {{title}}
        </p>
    </p>
    <p>{{tube}}</p>
</div>
<div>
    你好
</div>
`
let array: Array<string> = [];
function transHtml(index: number, t: string) {
    if (index > t.length)
        return 0;

    let str = t.substr(index, t.length);
    let r = /(?<=<).*?(?=>)/
    let s = str.match(r);
    let e = s[0].split(' ');
    let eStr = `/${e[0]}`;
    let i = str.indexOf(eStr) + eStr.length + 1;
    array.push(str.substr(0, i));
    return i;
}


import( /* webpackChunkName: "print" */ 'lib/print').then(function (p) {
    // p.default.print(innerText);

    for (let index = 0; index < innerText.length;) {        
        index += transHtml(index, innerText);
    }


    console.log(array);
});