const { auth: services } = require("../../services");

const registerUserController = async (req, res, next) => {
  try {
    const data = await services.registerUser(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = registerUserController;
