const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connection for mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(chalk.inverse.blue("Database connected"));
  })
  .catch((err) => {
    console.log(chalk.inverse.red("Error connecting to database"));
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(chalk.inverse.blue(`Server started at port ${process.env.PORT}`));
});
