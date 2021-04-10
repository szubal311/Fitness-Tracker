const express = require("express");
const mongoose = require("mongoose");
var MONGODB = process.env.MONGODB_URI || "mongodb://localhost/workout";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({extend: true}));
app.use(express.json);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require('./routes/workouts-api'));
app.usr(require('./routes/html-api'));


app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}!`);
})



