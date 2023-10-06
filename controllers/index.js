const authControllers = require("./auth");
const usersControllers = require("./users");

module.exports = {
  auth: authControllers,
  users: usersControllers,
};
