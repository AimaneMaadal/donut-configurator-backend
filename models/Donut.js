const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const donutscheme = new Schema({
  dough: {
    type: Number,
    required: true,
  },
  glaze: {
    type: Number,
    required: true,
  },
  sprinkles: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
});

const Donut = model("Donuts", donutscheme);
module.exports = Donut;
