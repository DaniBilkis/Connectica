const express = require( 'express' );
const router = express.Router();
const controller = require( './controller' );

router.route('/').post( controller.createMessage );
router.route('/messages').get( controller.getMessages );

module.exports = router;
