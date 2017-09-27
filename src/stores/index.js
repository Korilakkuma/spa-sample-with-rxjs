'use strict';

export default class Store {
    constructor(subject) {
        this.subject = subject;
        this.count   = 0;
    }

    subscribe(callback) {
        this.subject.subscribe(count => {
            this.count = count;
            callback();
        });
    }

    unsubscribe() {
        this.subject.unsubscribe();
    }

    getCount() {
        return this.count;
    }
}
