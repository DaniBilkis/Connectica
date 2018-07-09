const queries = require('./../query');

const getMenus = async (req, res) => {
  try {
    const owner = req.user.sub;
    const menus = await queries.getMenus( owner );
    res.json({ result: menus });
  } catch (err) {
    return err;
  }
};
