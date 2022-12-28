const router = require('express').Router();
const accidentController = require('../controllers/accident.controller');

router.post('/', accidentController.createAccident);

module.exports = router;