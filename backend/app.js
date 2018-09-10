const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const boodyParser = require('body-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const provisionsRouter = require('./routes/provisions');
const mongoose = require('mongoose');
const app = express();
const authenticationServices = require('./services/authenticationServices'); 
const provisionServices = require('./services/provisionServices');
const cors = require('cors');
const schedule = require('node-schedule');

app.use(cors({
  origin: 'http://192.168.1.13:3001',
  credentials: true,
}));
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(boodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(authenticationServices.retrieveUser);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/provisions', provisionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(500).json({
        message: err.message,
        error: err
    });
 
});

//connexion to the bdd
mongoose.connect('mongodb://localhost:27017/courses').then(() => { 
	console.log("Database connection OK");
   },
  err => {
  	console.log('unable to connect to Database');
  	console.log(err);
  	process.exit(1);
  }
);

//Scheduler to clean the database of buyed product once a week 
schedule.scheduleJob('*/30 * * * * *',()=>{
    console.log('cleaning database...');
    provisionServices.deleteProvisions();
})

module.exports = app;
