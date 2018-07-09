const Menus = require('./../model');

const getMenus = async menus => {
  try {
    return await Menus.findOne({ owner: 'user' });
    /*
    return await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
    });
    */
  } catch (err) {
    return err;
  }
};
