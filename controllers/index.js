const authControllers = require("./auth");
const usersControllers = require("./users");
const waterControllers = require("./water");

module.exports = {
  auth: authControllers,
  users: usersControllers,
  water: waterControllers,
};
