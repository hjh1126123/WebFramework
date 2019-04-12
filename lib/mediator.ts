import {
    page,
    node
} from './modules/_interface'

class Mediator {
    private node: node;
    public async GetNode() {
        if (!this.node) {
            let {
                default: _
            } = await import( /* webpackChunkName: "node" */ './modules/node');
            this.node = new _(this);
        }
        return this.node;
    }

    private page: page;
    public async GetPage() {
        if (!this.page) {
            let {
                default: _
            } = await import( /* webpackChunkName: "page" */ './modules/page');
            this.page = new _(this);
        }
        return this.page;
    }
}

export default Mediator;