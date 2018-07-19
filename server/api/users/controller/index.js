const queries = require('./../query');
const util = require('./../util');
const { sendJsonResponse } = require('./../../_shared');


const postUser = async (req, res) => {
  try {
    const hashedPassword = await util.hashPassword(req.body.password);

    console.log( 'Here -> PostUser' );
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      //username: req.body.username,
      password: hashedPassword
    };

    const existingEmail = await queries.getUserByEmail(userData.email);
    //const existingUsername = await queries.getUserByUsername(userData.username);

    if ( existingEmail ) {
      sendJsonResponse( res, 409, { message: 'Email already exists' } );
    }

    // We'll eventually create the user in a
    // database, but for now we'll just log
    // the incoming data to the console
    await queries.createUser(userData);

    // console.log(userData);
    sendJsonResponse( res, 201, { message: 'User created!' } );
  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem creating your account! - ' + err } );
  }
};

const getUserByEmail = async (req, res) => {
  console.log( 'Inside getUSerByEmail' );
  try {

    const email = req.query.email.toLowerCase();
    const existingEmail = await queries.getUserByEmail(email);

    if (existingEmail) {
      sendJsonResponse( res, 200, { emailTaken: true } );
    }
    sendJsonResponse( res, 200, { emailTaken: false } );
  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem checking the email' } );
  }
};


module.exports = { postUser, getUserByEmail };
