import(/* webpackChunkName: "htm" */ '../lib/node-util').then(function (htm) {
    function h(type: any, props: any, ...children: any) {
        return { type, props, children };
    }

    const html = htm.default.bind(h);

    let vNode = html`
    <div class="header">
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
    </div>`

    console.log(vNode);
});