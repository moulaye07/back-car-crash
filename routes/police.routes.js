const router = require('express').Router();
const policeController = require('../controllers/police.controller');

router.post('/', policeController.createPolice);

module.exports = router;