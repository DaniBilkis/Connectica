const queries = require('./../query');
const { sendJsonResponse } = require('./../../_shared');

const getMessages = async (req, res) => {
  try {
    // This part needs to change since messages will have to be retrieved based on the user or company
    const owner = 'user';
    const messages = await queries.getMessages( owner );

    sendJsonResponse( res, 200, { messages: messages });
  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem fetching messages! - ' + err } );
  }
};

const createMessage = async (req, res) => {
  try {
    const message = req.body.recordDetails;
    console.log ( 'data.controller.createMessage - body message -> ' + JSON.stringify( message, null, 4 ) );
    const messages = await queries.createMessage( message );
    console.log ( 'data.controller.createMessage - response messages -> ' + JSON.stringify( messages, null, 4 ) );
    sendJsonResponse( res, 200, { message: 'Message was created successfully!' });
  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem creating a message! - ' + err } );
  }
}

module.exports = { getMessages, createMessage };
