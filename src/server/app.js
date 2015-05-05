require('node-jsx').install({ extension: '.jsx' });

import express from 'express';
import path from 'path';
import index from './routes/index';

const app = express();
const router = express.Router();
const port = process.env.PORT || 1912;

app.set('views', 'src/server/views/');
app.set('view engine', 'jade');

app.use('/scripts', express.static(path.join(__dirname, '../../build/js')));

app.use('/', index);

app.listen(port, () =>
  console.log('listening on *:' + port)
);
