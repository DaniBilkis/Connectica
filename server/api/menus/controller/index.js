const queries = require('./../query');
const { sendJsonResponse } = require('./../../_shared');

const getMenus = async (req, res) => {
  try {
    console.log( 'menus->controller->Trying to get menus');
    const owner = 'user';
    const menus = await queries.getMenus( owner );
    console.log( 'menus->controller->Was able to get menus');
    sendJsonResponse( res, 200, { menus: menus });
  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem fetching menu! - ' + err } );
  }
};

module.exports = { getMenus };
