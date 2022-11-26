require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mainRouter = require('./src/route/index');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', mainRouter);
app.use((req, res, next) => {
  res.json({
    status: 200,
    message: 'Welcome To Express',
  });
});

module.exports = app;
