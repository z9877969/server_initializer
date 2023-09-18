const { users: services } = require("../../services");

const updateUserInfo = async (req, res, next) => {
  try {
    const updatedInfo = await services.updateUserInfo(req.user, req.body);

    res.json(updatedInfo);
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserInfo;
