const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuModel = new Schema({
  referenceName: { type: String, required: true },
  displayName: { type: String, required: true },
  iconName: { type: String, required: false },
  route: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  parent: { type: String, required: false }
});

module.exports = mongoose.model( 'Menu', menuModel );

