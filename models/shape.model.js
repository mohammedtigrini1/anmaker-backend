const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShapeSchema = new Schema({
  website1: { type: mongoose.Types.ObjectId, unique: true, required: true },
  website2:{ type: mongoose.Types.ObjectId, unique: true, required: true },
  created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("shape", ShapeSchema, "shapes");
