const express = require( 'express' );
const router = express.Router();
const controller = require( './controller' );

router.route('/').post( controller.postUser );
router.route('/login').get( controller.getUserByEmail );

module.exports = router;
