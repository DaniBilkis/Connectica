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
      return sendJsonResponse( res, 409, { message: 'Email already exists' } );
      // return res.status(400).json({ message: 'Email already exists' });
    }

/*
    if (existingUsername) {
      return res.status(400).json({ message: 'Username already exists' });
    }
  */
// We'll eventually create the user in a
// database, but for now we'll just log
// the incoming data to the console
    await queries.createUser(userData);

    // console.log(userData);
    return sendJsonResponse( res, 201, { message: 'User created!' } );
  } catch (err) {
    return sendJsonResponse( res, 400, { message: 'There was a problem creating your account! - ' + err } );
  }
};

const getUserByEmail = async (req, res) => {
  try {

    const email = req.query.email.toLowerCase();
    const existingEmail = await queries.getUserByEmail(email);

    if (existingEmail) {
      return sendJsonResponse( res, 200, { emailTaken: true } );
    }
    return sendJsonResponse( res, 200, { emailTaken: false } );
  } catch (err) {
    return sendJsonResponse( res, 400, { message: 'There was a problem checking the email' } );
  }
};


module.exports = { postUser, getUserByEmail };
