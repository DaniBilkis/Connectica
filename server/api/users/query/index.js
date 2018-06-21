const User = require('./../model');

const createUser = async userData => {
  try {
    const newUser = new User(userData);
    return newUser.save();
  } catch (err) {
    return err;
  }
};

const getUser = async usernameOrEmail => {
  try {
    return await User.findOne({ email: usernameOrEmail });
    /*
    return await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
    });
    */
  } catch (err) {
    return err;
  }
};

const getUserByUsername = async username => {
  try {
    return await User.findOne({ username });
  } catch (err) {
    return err;
  }
};

const getUserByEmail = async email => {
  try {
    return await User.findOne({ email: email });
  } catch (err) {
    return err;
  }
};

module.exports = { createUser, getUser, getUserByUsername, getUserByEmail };
