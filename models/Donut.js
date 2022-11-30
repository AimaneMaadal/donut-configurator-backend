const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const donutSchema = new Schema({
  dough: {
    type: Number,
  },
  glaze: {
    type: Number,
  },
  sprinkles: {
    type: Number,
  },
  company: {
    type: String,
  },
});

const Donut = model("Donuts", donutSchema);
module.exports = Donut;
