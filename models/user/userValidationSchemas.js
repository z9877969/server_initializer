const Joi = require("joi");
const mongoose = require("mongoose");
const {
  userSchema: constants,
  waterSchema: { WATER_RATE },
  regex: { EMAIL_REGEX },
} = require("../../constants");

const authUserValidationSchema = Joi.object({
  email: Joi.string()
    .pattern(EMAIL_REGEX)
    .max(constants.PASSWORD_LENGTH.MAX)
    .required(),
  password: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
});

const refreshTokensValidationSchema = Joi.object({
  sid: Joi.string()
    .custom((value, helpers) => {
      const isValidObjectId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidObjectId) {
        return helpers.message({
          custom: "Invalid 'sid'. Must be a MongoDB ObjectId",
        });
      }
      return value;
    })
    .required(),
});

const updateUserInfoValidationSchema = Joi.object({
  email: Joi.string().pattern(EMAIL_REGEX),
  password: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
  oldPassword: Joi.string()
    .min(constants.PASSWORD_LENGTH.MIN)
    .max(constants.PASSWORD_LENGTH.MAX),
  name: Joi.string().max(constants.MAX_NAME_LENGTH),
  gender: Joi.string().valid(constants.GENDER.MAIL, constants.GENDER.FEMAIL),
});

const updateWaterRateValidationSchema = Joi.object({
  waterRate: Joi.number().min(WATER_RATE.MIN).max(WATER_RATE.MAX).required(),
});

module.exports = {
  authUser: authUserValidationSchema,
  updateUserInfo: updateUserInfoValidationSchema,
  updateWaterRate: updateWaterRateValidationSchema,
  refreshTokens: refreshTokensValidationSchema,
};
