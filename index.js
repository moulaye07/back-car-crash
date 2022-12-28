const express = require('express');
const mongoose = require('mongoose');


const app = express();



//connection bdd
mongoose.connect("mongodb://192.168.122.32:27017", (err) => {
    if (!err) console.log("connected");
    else console.log("error");
})
 

//server
app.listen('8001', () => {
    console.log(`Listening on port 8001`);
})