const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

// If deployed, use the deployed database. Otherwise
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect("mongodb://songwright:xandra4heroku@ds033579.mlab.com:33579/heroku_l1tk3wz1", {

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});