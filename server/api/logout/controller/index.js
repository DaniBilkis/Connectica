const { sendJsonResponse } = require('./../../_shared');

const postLogout = (req, res) => {
  req.session.destroy( err => {
    if ( err ) {
      sendJsonResponse( res, 400, { message: 'Something went wrong during logout.' } );
      // res.status(400).json({ message: 'Something went wrong' });
    }
    sendJsonResponse( res, 200, { message: 'Logout successful' } );
    // res.json({ message: 'Logout successful' });
  });
};

module.exports = { postLogout };
