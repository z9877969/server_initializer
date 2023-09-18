const getUserAccessToEntity = require("../helpers/getUserAccessToEntity");

const userAccessToEntity = (model, entityName) => async (req, res, next) => {
  try {
    const { user, params } = req;
    await getUserAccessToEntity(user._id, model, params.id, entityName);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userAccessToEntity;
