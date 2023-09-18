const { users: services } = require("../../services");

const getCurrentUser = async (req, res, next) => {
  try {
    const userData = await services.getCurrentUser(req.user);
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrentUser;
