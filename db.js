const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://alina:alina123@cluster0.yvzas.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log("MongoDB connection successful");
})

db.on('error', ()=>{
    console.log("connection failed")
})

module.exports = mongoose