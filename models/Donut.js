const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donutSchema = new Schema({
  dough: {
    type: Number,
    required: true,
  },
  glaze: {
    type: Number,
    required: true,
  },
  topping: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
});

const Donut = mongoose.model("donuts", donutSchema);

module.exports = Donut;
