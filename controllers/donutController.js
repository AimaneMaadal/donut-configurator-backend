const Donut = require("../models/Donut");

const getAllDonuts = async (req, res, next) => {
  try {
    const donuts = await Donut.find();
    res.status(200).json(donuts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getDonutById = async (req, res) => {
  try {
    const donut = await Donut.findById(req.params.id);
    res.status(200).json(donut);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createDonut = async (req, res) => {
  try {
    const donut = await Donut.create(req.body);
    res.status(201).json(donut);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

const deleteDonut = async (req, res) => {
  try {
    const donut = await Donut.findByIdAndDelete(req.params.id);
    res.status(200).json(donut);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const updateDonut = async (req, res) => {
  try {
    const donut = await Donut.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(donut);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllDonuts,
  createDonut,
  deleteDonut,
  updateDonut,
  getDonutById,
};
