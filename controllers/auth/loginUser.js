const { auth: services } = require("../../services");

const loginUser = async (req, res, next) => {
  try {
    console.log("req :>> ", req);
    const user = await services.loginUser(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
