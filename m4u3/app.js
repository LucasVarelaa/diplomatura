var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//
var preciosRouter = require('./routes/precios') //  routes/precios.js
var promocionesRouter = require('./routes/promociones') //  routes/promociones.js
var ventasRouter = require('./routes/ventas') //  routes/ventas.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//
app.use('/precios', preciosRouter);
app.use('/promociones', promocionesRouter);
app.use('/ventas', ventasRouter);


app.get('/prueba', function(req,res){
  res.send('Hola soy la pagina de prueba')
})

app.get('/promociones', function(req,res){
  res.send('Hola soy la pagina de promociones')
})

app.get('/ventas', function(req,res){
  res.send('Hola soy la pagina de ventas')
})
//


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
