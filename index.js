const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const accidentRoutes = require('./routes/accident.routes');
const peopleRoutes = require('./routes/people.routes');
const hospitalRoutes = require('./routes/hospital.routes');
const policeRoutes = require('./routes/police.routes');

const app = express();



//connection bdd
mongoose.connect("mongodb://192.168.122.214:27017/CRASH", (err) => {
    if (!err) console.log("connected");
    else console.log("error");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use('/api/accident', accidentRoutes);
app.use('/api/people', peopleRoutes);
app.use('/api/hospital', hospitalRoutes);
app.use('/api/police', policeRoutes);



//server
app.listen('8001', () => {
    console.log(`Listening on port 8001`);
})