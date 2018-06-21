require('dotenv').config();
const express = require('express');
const path = require('path');
// var favicon = require('serve-favicon');
const logger = require('morgan');
// var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
// var userSchema = require('./server/modules/users');

// var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;

// [SH] Bring in the data model
require('./server/api/modules/db');

// [SH] Bring in the Passport config after model is defined
//require('./server/config/passport');

// [SH] Bring in the routes for the API (delete the default routes)
//var router = require('./server/routes/router');
// const router = require( './server/api/users' );

const app = express();

/*
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());
*/

/// Settings
// Make JSON responses beautiful
app.set('json replacer', function(key, value){
  if (key === 'discount')
    return undefined;
  else
    return value;
});
app.set('json spaces', 4);

// disables the application root source
if ( 'production' === app.get('env') ) {
  app.disable('x-powered-by');
}

// Set a View Engine
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ 'extended': 'false' }));

// Create link to Angular build directory
// var distDir = __dirname + "/dist/";
// app.use( express.static( distDir ) );
app.use( express.static( path.join( __dirname, 'dist/connectica' ) ) );
// app.use(cookieParser());

//app.use(mongo_db());

//use sessions for tracking logins
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 3600000 },
    name: 'Connectica.io.cookie'
  })
);

// [SH] Initialise Passport before using the route middleware
// app.use(passport.initialize());
//app.use(passport.session());

// configure passport
//passport.use(new LocalStrategy(userSchema.authenticate()));
//passport.serializeUser(userSchema.serializeUser());
//passport.deserializeUser(userSchema.deserializeUser());
//app.use(require('less-middleware')(path.join(__dirname, 'src')));
// app.use( express.static(path.join(__dirname, 'dist')) );


// Set our api routes
// app.use('/api', router);
// app.use('/login', router);

// Catch all other routes and return the index file
app.get( '/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//app.all('*', router);

// User routes
app.use('/api/users', require('./server/api/users'));

// Auth routes
app.use('/api/authenticate', require('./server/api/authenticate'));

/// error handlers

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

console.log( 'This looks like a ' + app.get('env') + ' environment to me...');
console.log( '__dirname of this project is: ' + __dirname );
console.log( 'X-Powered-By is ' + app.enabled('x-powered-by') );

module.exports = app;
