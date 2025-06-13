var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// DB connection
var db require(./db.js)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dogsRouter = require('.routes/dogs');
var walkrequestsopenRouter = require('.routes/walkrequestsopen');
var walkerssummaryRouter = require('.routes/walkerssummary');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;


app.use('/api/dogs', dogsRouter);
app.use('/api/walkrequests/open', walkrequestsopenRouter);
app.use('/api/walkers/summary', walkerssummaryRouter);