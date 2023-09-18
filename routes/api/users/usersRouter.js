const { createRouter } = require("../../../helpers");
const {
  defaultMiddlewares,
  usersRouterOptions,
} = require("./usersRouterOptions");

const usersRouter = createRouter({
  defaultMiddlewares,
  options: usersRouterOptions,
});

usersRouter.setRouter();

module.exports = usersRouter.router;
