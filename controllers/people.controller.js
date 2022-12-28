const peopleModel = require('../models/people.model');

//inscription
module.exports.addPeople = async (req, res) => {
    const {name, address, relatives, phone, picture, email} = req.body
    try {
        const people = await peopleModel.create({name, address, relatives, phone, picture, email});
        res.status(201).json({ people : people._id});
    }
    catch(err) {
        res.status(200).send({errors})
    }
}