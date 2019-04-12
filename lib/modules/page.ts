import {
    page
} from './_interface'
import $_ from './_'

class Page extends $_ implements page {
    /**
     * vnode对象
     */
    vNode: object[];

    /**
     * 数据模型
     */
    private _data: object;
    get Data(): object {
        return this._data;
    }
    set Data(o: object) {
        if (o === this._data) {
            console.log('没有任何变化');
        } else {
            this._data = o;
            this.Render(this.Diff(this._data, o));
        }
    }

    /**
     * 差异计算
     * @param old$o 旧对象
     * @param new$o 新对象
     */
    private Diff(old$o: object, new$o: object) {
        return new Array<Object>();
    }

    /**
     * 渲染节点
     * @param vNode 节点对象
     */
    private Render(vNode: Array<object>) {

    }


    private h(type: any, props: any, ...children: any) {
        return {
            type,
            props,
            children
        };
    }
    /**
     * 生成节点
     * @param $h html
     */
    public async html($h: TemplateStringsArray) {
        try {
            let node = await this.mediator.GetNode();
            this.vNode = node.build($h);
        } catch (ex) {
            console.error(ex);
        }
    }
}

export default Page;