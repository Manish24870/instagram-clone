const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRouter = require("./routes/userRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

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

// Mount the routes
app.use("/api/users", userRouter);

// Global error handler
app.use(globalErrorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(chalk.inverse.blue(`Server started at port ${process.env.PORT}`));
});
