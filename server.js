const mongoose = require("mongoose");
const app = require("./app");

require("dotenv").config();

const { DB_HOST, PORT = 4040 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("==============================");
      console.log("Server runing PORT:", PORT);
      console.log("Database connection successful");
      console.log("==============================");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
