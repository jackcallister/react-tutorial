import express from 'express';
import React from 'react';
import App from '../../app/app';

const router = express.Router();

router.get('/', function(req, res) {
  const el = React.createElement(App, {});
  const html = React.renderToString(el);
  res.render('index', { app: html });
});

export default router;
