const validateAuth = require("./validation/validateAuth");
const validateUser = require("./validation/validateUser");
const validateWater = require("./validation/validateWater");
const authorization = require("./authorization");
const { upload } = require("./multerUpload");
const userAccessToEntity = require("./userAccessToEntity");

module.exports = {
  validateAuth,
  validateUser,
  validateWater,
  authorization,
  upload,
  userAccessToEntity,
};
