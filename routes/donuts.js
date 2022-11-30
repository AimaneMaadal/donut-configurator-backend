const express = require('express');
const router = express.Router();
const donutController = require('../controllers/donutController');

router.get('/', donutController.getAllDonuts);
router.post('/', donutController.createDonut);

module.exports = router;
