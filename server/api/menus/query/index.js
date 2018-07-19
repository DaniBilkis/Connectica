const Menus = require('./../model');
const { sendJsonResponse } = require('./../../_shared');

const getMenus = async menus => {
  try {
    console.log ( 'Inside getMenus Query method ->' );

    return await Menus.aggregate( [
      {
        $match: {
          parent: null
        }
      },
      {
        $graphLookup: {
          from: 'menus',
          startWith: '$referenceName',
          connectFromField: 'referenceName',
          connectToField: 'parent',
          as: 'submenus',
          depthField: 'steps'
        }
      },
      {
        $sort : {
          'submenus.steps' : 1
        }
      }
    ] );

  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem fetching menu using query! - ' + err } );
  }
};

module.exports = { getMenus };
