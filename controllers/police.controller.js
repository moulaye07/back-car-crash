const policeModel = require('../models/police.model');

module.exports.createPolice = async (req, res) => {
    const newPolice = new policeModel({
        name: req.body.name,
        phone: req.body.phone,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
    });
    try {
        const police = await newPolice.save();
        return res.status(201).json(police);
    } catch (err) {
        console.log(err)
        return res.status(201).json(err)   
    }  
};