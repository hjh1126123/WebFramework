import { page, node } from './interface'

class Mediator {
    private node: node;
    public async GetNode() {
        if (!this.node) {
            let { default: _ } = await import(/* webpackChunkName: "node-util" */ './node-util');
            this.node = _(this);
        }
        return this.node;
    }

    private page: page;
    public async GetPage() {
        if (!this.page) {
            let { default: _ } = await import(/* webpackChunkName: "page-util" */ './page-util');
            this.page = _(this);
        }
        return this.page;
    }
}

export default Mediator;