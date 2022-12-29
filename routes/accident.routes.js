const router = require('express').Router();
const accidentController = require('../controllers/accident.controller');

router.post('/', accidentController.createAccident);

// get accidents
router.get('/', accidentController.getAccidents);

//get a accident
router.get('/:id', accidentController.accidentData);

//modifier
router.put('/:id', accidentController.updateAccident);

module.exports = router;