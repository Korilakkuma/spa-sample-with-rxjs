'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Rx from 'rxjs';
import Action from '../../actions';
import Store from '../../stores';


export default class Counter extends React.Component {
    static CLASS_NAME = 'Counter';

    static propTypes = {
        match : PropTypes.object
    };

    constructor(props) {
        super(props);

        this.subject = new Rx.Subject();
        this.action = new Action(this.subject);
        this.store  = new Store(this.subject);

        const count = (props.match && props.match.params) ? parseInt(props.match.params.count) : 0;

        if (isNaN(count)) {
            this.state = { count : this.store.getCount() };
        } else {
            this.state = { count };
        }

        this.store.subscribe(this.onChange.bind(this));
    }

    onChange() {
        this.setState({ count : this.store.getCount() });
    }

    onClickUpButton() {
        this.action.count(this.state.count + 1);
    }

    onClickDownButton() {
        this.action.count(this.state.count - 1);
    }

    componentWillUnmount() {
        this.store.unsubscribe();
    }

    render() {
        const { count } = this.state;

        return (
          <div className={Counter.CLASS_NAME}>
              <p>
                  <button type="button" className={`${Counter.CLASS_NAME}__up Button`} onClick={this.onClickUpButton.bind(this)}>+</button>
                  <button type="button" className={`${Counter.CLASS_NAME}__down Button`} onClick={this.onClickDownButton.bind(this)}>-</button>
              </p>
              <p>
                  <span className={`${Counter.CLASS_NAME}__count`}>{count}</span>
              </p>
          </div>
        );
    }
}
