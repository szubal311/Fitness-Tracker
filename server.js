const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// var MONGODB = process.env.MONGODB_URI || "mongodb://localhost/workout";
const db =require("./models")

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.static("public"));


app.use(express.urlencoded({extend: true}));
app.use(express.json());

app.use(require("./routes/workoutsApi"));
app.use(require("./routes/htmlApi"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}!`);
})



