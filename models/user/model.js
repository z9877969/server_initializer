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
      minLength: constants.PASSWORD_LENGTH.MIN,
      maxLength: constants.PASSWORD_LENGTH.MAX,
    },
    avatarUrl: {
      type: String,
      require: true,
      default: null,
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
