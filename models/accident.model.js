const mongoose = require('mongoose');

const accidentSchema = new mongoose.Schema(
    {
        casualties: {
            type: [String],
            required: true
        },
        vehicles: {
            type: [String],
            required: true
        },
        severity: {
            type: String,
        },
        latitude: {
            type: Number, 
            required: true
        },
        longitude: { 
            type: Number, 
            required: true
        },
        
    },
    {
        timestamps: true
    }

);

module.exports = mongoose.model('accident', accidentSchema);