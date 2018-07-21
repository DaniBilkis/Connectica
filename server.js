//require('dotenv').config();
require('dotenv').config({path: '.env.example'});
const express = require('express');
const path = require('path');
// var favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const csrf = require('csurf');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// [SH] Bring in the data model
require('./server/api/modules/db');

const { sendJsonResponse } = require('./server/api/_shared');

const app = express();




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
app.use( express.static( path.join( __dirname, 'dist/connectica' ) ) );

// Required if we serve our API at a
// different origin than the Angular app
app.use( cors() ); // Cross-Origin Resource Sharing

const limiter = new rateLimit({
  windowMs: 15 * 60 * 1000, // set window to 15 minutes
  max: 100,
  delayMs: 0 // don't require a delay disabled
});

app.use( limiter );
app.use( helmet() );

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

app.use( cookieParser() );


const attachUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return sendJsonResponse( res, 401, { message: 'Authentication invalid' });
  }
  const decodedToken = jwtDecode(token);

  if (!decodedToken) {
    return sendJsonResponse( res, 401, { message: 'There was a problem authorizing the request' });
  } else {
    req.user = decodedToken;
    next();
  }
};

const checkJwt = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return sendJsonResponse( res, 403, { message: 'Access denied' } );
  }
  try {
    const decoded = jwt.verify( token, process.env.JWT_SECRET, {
      audience: 'api.connectica.io',
      issuer: 'api.connectica.io'
    });
    console.log(decoded);
    next();
  } catch (err) {
    return sendJsonResponse( res, 403, { message: 'Access denied' } );
  }
};

const makeCsrfToken = (req, res, next) => {
  res.cookie('csrf-token', req.csrfToken());
  next();
};


//---------- PUBLIC ROUTES --------------
// Catch all other routes and return the index file
/*
app.get( '/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
*/
//app.all('*', router);
app.get('/ping', (req, res) => {
  res.send('Hello world!');
});

// User routes
app.use('/api/users', require('./server/api/users'));

// Auth routes
app.use('/api/authenticate', require('./server/api/authenticate'));
app.use('/api/logout', require('./server/api/logout'));
app.use('/api/menus', require('./server/api/menus'));

// -------- AUTHENTICATED ROUTES ---------
app.use( csrf({ cookie: true }) );
app.use( makeCsrfToken );
app.use( attachUser );
app.use( checkJwt );



// -------- ERROR HANDLERS ---------------
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
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
