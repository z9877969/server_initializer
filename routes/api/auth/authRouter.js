const { createRouter } = require("../../../helpers");
const authRouterOptions = require("./authRouterOptions");

const authRouter = createRouter({
  options: authRouterOptions,
});

authRouter.setRouter();

module.exports = authRouter.router;
