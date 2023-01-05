const accidentModel = require('../models/accident.model');

module.exports.createAccident = async (req, res) => {
    const newAccident = new accidentModel({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        casualties: [],
        vehicles: [],
    });
    try {
        const accident = await newAccident.save();
        return res.status(201).json(accident);
    } catch (err) {
        console.log(err)
        return res.status(201).json(err)   
    }  
};

module.exports.getAccidents = async (req,res) => {
    const accidents = await accidentModel.find();
    res.status(200).json(accidents);
}

module.exports.getAccidentDate = async (req,res) => {
    const startDate = "2022-12-27"
    const endDate = "2022-12-30"
    const today = new Date(startDate);
    const today1 = new Date(endDate);
    console.log({ today, today1});
    const accidents = await accidentModel.find({
        createdAt: { $gte: today, $lt: today1},
      })
    res.status(200).json(accidents);
}


module.exports.accidentData = (req,res) => {
    accidentModel.findById(req.params.id, (err, docs) => {
        if(!err) res.send(docs);
        else console.log('Identifiant inconnu : ' + err);

    });
}


module.exports.updateAccident = async (req, res) => {
    try {
        accidentModel.findOneAndUpdate(
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