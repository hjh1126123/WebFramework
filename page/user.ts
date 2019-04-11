import(/* webpackChunkName: "mediator" */ 'lib/mediator').then(({ default: $m }) => {
    let mediator = new $m();
    mediator.GetPage().then(p => {
        p.html`
        <div class="$1" data-$1="$2">
            <p>我是</p>
            <p>你是？</p>
            <p>我不是？</p>
            <p>
                <p>你是不是</p>
                <p>我才不是</p>
            </p>
            <ul>
                <li>
                    {{n}}
                </li>
                <li>
                    {{p}}
                </li>
                <li>
                    {{a}}
                </li>
                <li>
                    {{d}}
                </li>
            </ul>
            <ul>
                <li for="(i,k) in 10"></li>
            </ul>
        </div>`;
        console.log(p.vNode);
        console.log('这里是user页面');
    });
}).catch(error => '中介者载入失败');
