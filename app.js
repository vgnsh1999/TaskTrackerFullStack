const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");


app.use("/user", userRoutes);
app.use("/task", taskRoutes);


mongoose
  .connect(
    "mongodb+srv://vigneshvaradhank:vigneshvaradhank123@cluster0.b2seyrm.mongodb.net/tasktracker"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
