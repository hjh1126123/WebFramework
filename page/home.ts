import(/* webpackChunkName: "mediator" */ 'lib/mediator').then(({ default: $m }) => {
    let mediator = new $m();
}).catch(error => '中介者载入失败');
