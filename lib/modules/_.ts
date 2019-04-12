import Mediator from '../mediator'

abstract class IModules {
    protected mediator: Mediator;
    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }
}

export default IModules;