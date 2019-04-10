function html(a: TemplateStringsArray): string {
    return a[0].replace(/[\r\n]/g, '');
}

const innerText: any = html`<div class="header">
    <p>{{name}}</p>
    <p>{{tube}}</p>
</div>
`

import( /* webpackChunkName: "print" */ 'lib/print').then(function (p) {
    p.default.print(innerText);
});