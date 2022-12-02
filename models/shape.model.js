const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoordinatesSchema = new Schema({
  x: { type: number, required: true },
  y: { type: number, required: true },
});

const ShapeInfoSchema = new Schema({
  name: {
    type: String,
    enum: ["rectangle", "triangle", "text", "circle", "composite"],
  },
  height: { type: String },
  width: { type: String },
  font: { type: String },
  text: { type: String },
  color: { type: String },
  coordinates: { type: CoordinatesSchema },
});

const ShapeSchema = new Schema({
  shapeName: { type: String, unique: true, required: true },
  shapeInfo: [ShapeInfoSchema],
});

module.exports = mongoose.model("shape", ShapeSchema, "shapes");
