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