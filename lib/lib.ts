
export namespace lib {
    export interface node {
        build($s: any): any;
    }

    export interface page {
        vNode: Array<object>;
        html($h: TemplateStringsArray): any;
    }

    export abstract class IModules {
        protected mediator: Mediator;
        constructor(mediator: Mediator) {
            this.mediator = mediator;
        }
    }

    export abstract class IPage {
        protected page: page;
        protected mediator: Mediator;
        constructor() {
            if (!this.mediator)
                this.mediator = new Mediator();
        }

        protected html($h: TemplateStringsArray) {
            this.mediator.GetPage().then(async p => {
                await p.html($h);
                this.page = p;
            });
        }

        public abstract init(): void;
        public abstract mounted(): void;
        public abstract leaved(): void;
    }

    export class Mediator {
        private node: node;
        public async GetNode() {
            if (!this.node) {
                let {
                    default: _
                } = await import( /* webpackChunkName: "node" */ './modules/node');
                this.node = new _();
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
}

// export default lib.Mediator;
