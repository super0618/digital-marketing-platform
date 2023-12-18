const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  refreshToken: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('refreshtoken', tokenSchema);