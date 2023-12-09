const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qnaSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'product',
    require: true
  },
  qna: [{
    questions: {
      type: String
    },
    questionby: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    questionedDate: {
      type: String
    },
    answer: {
      type: String
    },
    answerby: {
      type: Schema.Types.ObjectId,
      ref: 'admin'
    },
    answeredDate: {
      type: String
    }
  }],
  isDeleted: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('qna', qnaSchema);