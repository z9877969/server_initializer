const { User } = require("./user/model");
const userValidationSchemas = require("./user/userValidationSchemas");
const Water = require("./water/model");
const waterValidationSchemas = require("./water/waterValidationSchemas");
const { Session } = require("./session/model");

module.exports = {
  User,
  userValidationSchemas,
  Water,
  waterValidationSchemas,
  Session,
};
