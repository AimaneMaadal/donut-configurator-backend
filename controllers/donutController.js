const Donut = require("../models/Donut");

const getAllDonuts = async (req, res) => {
  try {
    const donuts = await Donut.find();
    res.status(200).json(donuts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createDonut = async (req, res) => {
    const newDonut = new Donut([
        req.body.dough,
        req.body.glaze,
        req.body.sprinkles,
        req.body.company
    ]);
    try {
        await newDonut.save();
        res.status(201).json(newDonut);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = {
    getAllDonuts,
    createDonut
};