"use strict"

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
const gitAllBookController = require('./controllers/Book.controller');
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
const seedbook = require('./models/Book.model');

/*app.get('/',(req,res)=>{

    seedbook();
    res.json("successfuly");
      
});*/

app.get('/get-data',gitAllBookController);



// dataBase connection
mongoose.connect(`${MONGO_SERVER}/bookstore`
,{useNewUrlParser:true,useUnifiedTopology:true});

app.listen(PORT,()=>{

    console.log("Listen "+ PORT);
});