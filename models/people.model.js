const mongoose = require('mongoose');
const { isEmail } = require('validator');

const peopleSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40,
        trim: true
      },
    phone: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
    },
    relatives: {
        type: [String],
        required: true
    },
    insurance: {
        type: String,
    },
    picture: {
      type: String,
    },
    email: {
        type: String,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const peopleModel = mongoose.model("people", peopleSchema);

module.exports = peopleModel;