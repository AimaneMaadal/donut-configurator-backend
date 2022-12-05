const Donut = require("../models/Donut");

const getAllDonuts = async (req, res, next) => {
  console.log("getAllDonuts");
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
  donut = new Donut([
    req.body.dough,
    req.body.glaze,
    req.body.sprinkles,
    req.body.company,
  ]);
  donut.save(function (err, donut) {
    if (err) {
      res.status;
    }
    res.status(201).send(donut);
  });
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
