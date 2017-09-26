'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Action from '../../actions';
import Store from '../../stores';
import Dispatcher from '../../dispatchers';

const dispatcher = new Dispatcher();
const action     = new Action(dispatcher);
const store      = new Store(dispatcher);

export default class Counter extends React.Component {
    static CLASS_NAME = 'Counter';

    static propTypes = {
        match : PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = { count : store.getCount() };

        store.on('CHANGE', () => {
            this.onChange();
        });
        // const count = (props.match && props.match.params) ? parseInt(props.match.params.count) : 0;

        // this.state = {
        //     count : isNaN(count) ? 0 : count
        // };
    }

    onChange() {
        this.setState({ count : store.getCount() });
    }

    onClickUpButton() {
        action.countUp(this.state.count + 1);
    }

    onClickDownButton() {
        action.countDown(this.state.count - 1);
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
