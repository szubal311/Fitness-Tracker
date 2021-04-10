const express = require("express");
const mongoose = reqire("mongoose");
var MONGODB = process.env.MONGODB_URI || "mongodb://localhost/workout";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({extend: true}));
app.use(express.json);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

