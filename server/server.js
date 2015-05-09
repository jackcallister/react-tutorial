'use strict';

import express from 'express';
import path from 'path';

import React from 'react';
import App from '../app/app';

const app = express();
const port = process.env.PORT || 1912;

app.set('views', 'server/views/');
app.set('view engine', 'ejs');

app.use('/scripts', express.static(path.join(__dirname, '../dist/scripts')));

app.use('/', function(req, res) {
  const el = React.createElement(App, {});
  const html = React.renderToString(el);

  res.render('index', { app: html });
});

app.listen(port, function() {
  console.log('listening on *:' + port);
});
