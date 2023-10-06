const {
  authorization,
  validateUser: validate,
  upload,
} = require("../../../middlewares");
const { users: controllers } = require("../../../controllers");

const defaultMiddlewares = [authorization.accessToken];

const usersRouterOptions = [
  {
    method: "get",
    route: "/current",
    middlewares: null,
    controller: controllers.getCurrentUser,
  },
  {
    method: "patch",
    route: "/info",
    middlewares: [validate.updateUserInfo],
    controller: controllers.updateUserInfo,
  },
  {
    method: "patch",
    route: "/avatar",
    middlewares: [upload.single("avatar")],
    controller: controllers.updateUserAvatar,
  },
];

module.exports = {
  defaultMiddlewares,
  usersRouterOptions,
};
