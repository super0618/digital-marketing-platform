const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'admin',
    required: true
  },
  citizenshipNumber: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32
  },
  panID: {
    type: String,
    trim: true,
    maxLength: 32
  },
  VATNo: {
    type: String,
    trim: true,
    maxLength: 32
  },
  vatClearance: {
    type: String
  },
  pan: {
    type: String
  },
  citizenship: {
    type: String
  },
  businessLicense: [{
    type: String
  }],
  comapnyRegister: [{
    type: String
  }],
  outAgreement: [{
    type: String
  }],
  isVerified: {
    type: Date, // As we may need verified date
    default: null
  },
  isDeleted: {
    type: Date,
    default: null
  }
}, { timestamps: true});

module.exports = mongoose.model('admindocument', documentSchema);