'use strict';

import Dispatcher from '../dispatchers';

export default class Store extends Dispatcher {
    constructor(dispatcher) {
        super();
        this.count = 0;

        dispatcher.on('COUNT_UP', this.onCountUp.bind(this));
    }

    onCountUp(count) {
        this.count = count;
        this.emit('CHANGE');
    }

    getCount() {
        return this.count;
    }
}
