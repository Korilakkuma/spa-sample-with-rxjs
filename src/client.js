'use strict';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Router>
        {require('./routes').default}
    </Router>,
    document.getElementById('app')
);
