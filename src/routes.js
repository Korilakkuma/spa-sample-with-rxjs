'use strict';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';

export default (
    <nav>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/counter">COUNTER from 0</Link></li>
            <li><Link to="/counter/100">COUNTER from 100</Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route path="/counter/:count" component={Counter} />
    </nav>
);
