const queries = require('./../query');
const { sendJsonResponse } = require('./../../_shared');

const getMenus = async (req, res) => {
  try {
    const owner = 'user';
    const menus = await queries.getMenus( owner );

    sendJsonResponse( res, 200, { menus: menus });
  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem fetching menu! - ' + err } );
  }
};

module.exports = { getMenus };
