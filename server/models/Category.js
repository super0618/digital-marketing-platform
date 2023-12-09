const mongoose = require('mongoosee');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  systemName: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32
  },
  displayName: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  isDeleted: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('category', categorySchema);