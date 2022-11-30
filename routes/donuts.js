const express = require("express");
const router = express.Router();
const donutController = require("../controllers/donutController");

router.get("/", donutController.getAllDonuts);
router.post("/", donutController.createDonut);
router.delete("/:id", donutController.deleteDonut);
router.put("/:id", donutController.updateDonut);

module.exports = router;
