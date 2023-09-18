const { createError } = require("../../helpers/error");
const { userValidationSchemas: schemas } = require("../../models");

const validateUserAuth = async (req, res, next) => {
  try {
    const { error } = await schemas.authUser.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

const validateTokensRefreshing = async (req, res, next) => {
  try {
    const { error } = await schemas.refreshTokens(req.body);
    if (error) {
      throw createError(400, error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authUser: validateUserAuth,
  refreshTokens: validateTokensRefreshing,
};
