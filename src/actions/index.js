'use strict';

export default class Action {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    countUp(data) {
        this.dispatcher.emit('COUNT_UP', data);
    }
}
