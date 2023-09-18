const { Schema, model } = require("mongoose");
const { userSchema: constants, regex } = require("../../constants");

const userSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: constants.MAX_NAME_LENGTH,
      default: null,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: regex.EMAIL_REGEX,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
      maxLength: 64,
    },
    gender: {
      type: String,
      enum: [constants.GENDER.MAIL, constants.GENDER.FEMAIL],
      default: constants.GENDER.MAIL,
    },
    avatarUrl: {
      type: String,
      require: true,
      default: null,
    },
    waterRate: {
      type: Number,
      required: true,
      default: 0,
    },
    hoursDiff: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = {
  User,
};
