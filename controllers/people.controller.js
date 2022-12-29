const peopleModel = require('../models/people.model');

//inscription
module.exports.addPeople = async (req, res) => {
    const {name, address, relatives, phone, picture, email} = req.body
    try {
        const people = await peopleModel.create({name, address, relatives, phone, picture, email});
        res.status(201).json({ people : people});
    }
    catch(err) {
        res.status(200).send({errors})
    }
}


module.exports.getPeople = async (req,res) => {
    const people = await peopleModel.find();
    res.status(200).json(people);
}

module.exports.peopleData = (req,res) => {
    peopleModel.findById(req.params.id, (err, docs) => {
        if(!err) res.send(docs);
        else console.log('Identifiant inconnu : ' + err);

    });
}

module.exports.updatePeopleData = async (req, res) => {
    try {
        peopleModel.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set: req.body
            },
            { 
                new: true,
                upsert: true,
                setDefaultsOnInsert: true 
            },
            (err, docs) => {
                if(!err) return res.send(docs);
                if(err) return res.status(500);send({message : err});
            }
        )
    } catch (err) {
        return res.status(500).send({message : err});
    }
}