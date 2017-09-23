'use strict';

export default class Dispatcher {
    constructor() {
        this.handlers = {};
    }

    on(type, handler) {
        if (this.handlers[type] === undefined) {
            this.handlers[type] = [];
        }

        this.handlers[type].push(handler);
    }

    emit(type, data) {
        const handlers = this.handlers[type] || [];

        handlers.forEach(handler => {
            handler.call(this, data);
        });
    }
}
