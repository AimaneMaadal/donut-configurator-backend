const express = require("express");
const router = express.Router();
const donutController = require("../controllers/donutController");
const checkAuth = require("../middleware/check-auth");

router.get("/", donutController.getAllDonuts);
router.get("/:id", donutController.getDonutById);

router.post("/", donutController.createDonut);

router.delete("/:id", donutController.deleteDonut);

router.put("/:id", donutController.updateDonut);

module.exports = router;
