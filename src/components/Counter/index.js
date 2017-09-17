'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../../actions/counter';
import * as Stores from '../../stores/counter';

export default class Counter extends React.Component {
    static CLASS_NAME = 'Counter';

    static propTypes = {
        match : PropTypes.object
    };

    constructor(props) {
        super(props);

        const count = (props.match && props.match.params) ? parseInt(props.match.params.count) : 0;

        this.state = {
            count : isNaN(count) ? 0 : count
        };
    }

    onClickUpButton() {
        // TODO
    }

    onClickDownButton() {
        // TODO
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
