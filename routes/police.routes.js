const router = require('express').Router();
const policeController = require('../controllers/police.controller');

router.post('/', policeController.createPolice);

//le plus proche
router.get('/', policeController.getStation);


module.exports = router;