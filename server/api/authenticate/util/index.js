const jwt = require('jsonwebtoken');

const createToken = user => {
  // Sign the JWT
  if (!user.role) {
    throw new Error('No user role specified');
  }
  return jwt.sign(
    {
      sub: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      iss: 'api.connectica.io',
      aud: 'api.connectica.io'
    },
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
};

module.exports = { createToken };
