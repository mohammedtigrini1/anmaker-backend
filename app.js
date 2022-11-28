const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://mtigrini:minousse1@anmaker.q1baume.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

const health = require("./routes/health");
app.use("/", health);

mongoose.connect(uri, { useNewUrlParser: true }, err => {
  if (err) {
    console.error("Could not connect to the database.");
    return;
  } else {
    app.listen(process.env.PORT || 3030, err => {
        console.log("Server listening on : " + (process.env.PORT || 3030));
    });
  }
});

