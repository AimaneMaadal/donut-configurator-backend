const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donutSchema = new Schema({
  dough: {
    type: String,
    required: true,
  },
  glaze: {
    type: String,
    required: true,
  },
  topping: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  brandtag: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: false,
  },
});

const Donut = mongoose.model("donuts", donutSchema);

module.exports = Donut;
