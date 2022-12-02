const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const uri = `mongodb+srv://mtigrini:${process.env.PASSWORD}@anmaker.q1baume.mongodb.net/?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

const healthRoutes = require("./routes/health");
const shapeRoutes = require("./routes/shape");
app.use("/", healthRoutes);
app.use("/", shapeRoutes);

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

