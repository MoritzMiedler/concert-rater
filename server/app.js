const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/concerts.js');
require('colors');
require('dotenv').config();
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler.js');
const bodyParser = require('body-parser');
const app = express();

app.use(
  bodyParser.urlencoded({
    limit: '5mb',
    extended: false,
  }),
);
app.use(bodyParser.json({ limit: '5mb' }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());
app.use(cors());

app.use(express.json());

app.use('/', routes);

app.use(notFoundHandler);

app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
