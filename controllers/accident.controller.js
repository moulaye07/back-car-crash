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
    const accidents = await accidentModel.find().sort({ createdAt: -1});;
    res.status(200).json(accidents);
}

module.exports.getAccidentDate = async (req,res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const accidents = await accidentModel.find({
        createdAt: { $gte: date1, $lt: date2},
      }).sort({ createdAt: -1});
    res.status(200).json(accidents);
}

module.exports.getAccidentsOfNode = async (req,res) => {
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const accidents = await accidentModel.find({longitude: longitude, latitude: latitude}).sort({ createdAt: -1});;
    res.status(200).json(accidents);
}

module.exports.getAccidentsOfNodeByDate = async (req,res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    console.log({ startDate, endDate});

    const accidents = await accidentModel.find({longitude: longitude, latitude: latitude, createdAt: { $gte: startDate, $lt: endDate}}).sort({ createdAt: -1});;
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