'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import express from 'express';
import logger from 'morgan';

const app = express();

const port = process.env.PORT || 8080;

app.use(logger('dev'));

app.use(express.static('public'));

app.get('/', render);
app.get('/counter', render);
app.get('/counter/:count', render);

app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});

function render(req, res) {
    const context = {};
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            {require('./routes').default}
        </StaticRouter>
    );

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>SPA with RxJS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="/app.css" type="text/css" media="all" />
</head>
<body>
    <div id="app">${content}</div>
    <script type="text/javascript" src="/app.js"></script>
</body>
</html>`;

    res.status(200).send(html);
};
