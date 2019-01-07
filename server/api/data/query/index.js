const Messages = require('./../model');
const { sendJsonResponse } = require('./../../_shared');

const getMessages = async owner => {
  try {
    console.log ( 'Inside getMesasges Query method ->' );

    return await Messages.find( { "PROFILE.OWNER": owner } );

  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem fetching messages! - ' + err } );
  }
};

const createMessage = async message => {
  try {
    console.log ( 'Inside createMesasge Query method ->' );
    const newMessage = new Messages( message );
    return newMessage.save();
  } catch (err) {
    sendJsonResponse( res, 400, { message: 'There was a problem creating a message! - ' + err } );
  }
};

module.exports = { getMessages, createMessage };
