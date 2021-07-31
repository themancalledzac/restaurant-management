// requestAnimationFrame("dotenv").config();

const express = require("express");
// const routes = require("./routes");

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(routes);

// connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/restaurant-manager",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
