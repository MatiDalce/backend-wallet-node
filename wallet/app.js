// Creamos la aplicación a partir de express-generator 
// Configuraciones del servidor y puerto están en la carpeta bin
var createError = require('http-errors');
var express = require('express'); 
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors') // requerimos el paquete CORS para configurar el origen de las peticiones que entran
var indexRouter = require('./routes/index'); // requerimos el indexrouter
const db = require('./models')



var app = express(); //ejecutamos express y lo almacenamos en la variable app para poder usarlo

// configuramos el motor de busquedas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // definimos ejs como view engine

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // definimos la carpeta statica de nuestro proyecto

app.use('/', indexRouter); // recibimos las peticiones y las redirigimos en el indexRouter

app.use(cors({origin:'*'})) // Permitimos el acceso público a la API

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
