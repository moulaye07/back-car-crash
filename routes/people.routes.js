const router = require('express').Router();
const peopleController = require('../controllers/people.controller');

//add people
router.post("/", peopleController.addPeople);

// get people
router.get('/', peopleController.getPeople);

//get a person
router.get('/:id', peopleController.peopleData);

//modifier
router.put('/:id', peopleController.updatePeopleData);

module.exports = router;