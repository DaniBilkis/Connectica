const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuModel = new Schema({
  displayName: { type: String, required: true },
  disabled: { type: Boolean, required: false },
  iconName: { type: String, required: false },
  route: { type: String, required: false },
  //submenus: [ menuModel ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('menu', menuModel);

