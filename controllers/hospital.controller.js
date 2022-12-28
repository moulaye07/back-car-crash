const hospitalModel = require('../models/hospital.model');

module.exports.createHosptal = async (req, res) => {
    const newHospital = new hospitalModel({
        name: req.body.name,
        phone: req.body.phone,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
    });
    try {
        const hospital = await newHospital.save();
        return res.status(201).json(hospital);
    } catch (err) {
        console.log(err)
        return res.status(201).json(err)   
    }  
};