const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology :true
})

const db =mongoose.connection;

db.on('error',(error)=>{
    console.log("Connnection Error" ,error)
})

db.on('connected',()=>{
    console.log("Connected to MongoDB")
})

db.on('disconnected',()=>{
    console.log("Disconnected to MongoDB")
})

module.exports=db;