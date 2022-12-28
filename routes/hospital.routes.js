const router = require('express').Router();
const hospitalController = require('../controllers/hospital.controller');

router.post('/', hospitalController.createHosptal);

module.exports = router;