const Donut = require("../models/Donut");

// GET all donuts
const getAllDonuts = async (req, res) => {
  try {
    const donuts = await Donut.find();
    res.json(donuts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST one donut to mongoDB
const createDonut = (req, res) => {
  console.log(req.body);
  Donut.create(req.body, (err, donut) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(201).json(donut);
    }
  });
};

module.exports = {
  getAllDonuts,
  createDonut,
};
