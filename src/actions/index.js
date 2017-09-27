'use strict';

export default class Action {
    constructor(subject) {
        this.subject = subject;
    }

    count(data) {
        this.subject.next(data);
    }
}
