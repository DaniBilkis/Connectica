const { getUser } = require('./../../users/query');
const { verifyPassword } = require('./../../users/util');
const { createToken } = require('./../util');
const jwtDecode = require('jwt-decode');
const { sendJsonResponse } = require('./../../_shared');

const postAuthenticate = async (req, res) => {

  try {

    const usernameOrEmail = req.body.username;
    const password = req.body.password;

    // console.log ( 'Here in the Auth API -> ' + usernameOrEmail + ' ' + password );
    // console.log ( 'Here in the Auth API - BODY -> ' + JSON.stringify( req.body, null, 4) );

    const user = await getUser( usernameOrEmail );
    // console.log ( 'Here in the Auth API - User Found -> ' + JSON.stringify( user, null, 4) );
    const passwordValid = await verifyPassword( password, user.password );

    if ( passwordValid ) {
      // req.session.user = { email: user.email, username: user.username };
      req.session.user = { email: user.email };
      req.session.isAuthenticated = true;

      const token = createToken(user);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      const userInfo = {
        email: user.email,
        // username: user.username,
        // role: user.role
        firstName: user.firstName,
        lastName: user.lastName
      };

      res.cookie( 'token', token, { maxAge: 360000, httpOnly: true } );

      sendJsonResponse( res, 200, { message: 'Authentication successful!', token, userInfo, expiresAt } );
      // res.json({ message: 'Authentication successful!' });
    } else {
      sendJsonResponse( res, 403, { message: 'Wrong username, email, or password.' } );
      // res.status(403).json({ message: 'Wrong username, email, or password.' });
    }

  } catch (err) {
    console.log( err );
    sendJsonResponse( res, 400, { message: 'Something went wrong.' } );
  }

};

module.exports = { postAuthenticate };
