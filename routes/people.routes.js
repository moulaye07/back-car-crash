const router = require('express').Router();
const peopleController = require('../controllers/people.controller');

//add people
router.post("/", peopleController.addPeople);

module.exports = router;