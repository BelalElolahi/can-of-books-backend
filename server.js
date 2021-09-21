"use strict"

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
const {gitAllBookController
    , CreateBookController
    ,deleteBookController
    , updateBookController
}= require('./controllers/Book.controller');
const PORT = process.env.PORT;
const MONGO_SERVER_URL = process.env.MONGO_SERVER_ATLAS_URL;
/*const {seedbook} = require('./models/Book.model');

app.get('/',(req,res)=>{

    seedbook();
    res.json("successfuly");
      
});*/
app.use(express.json());


app.get('/books',gitAllBookController);

app.post('/create-book',CreateBookController);

app.delete('/delete-book/:id',deleteBookController);

app.put('/update-book/:id',updateBookController)



// dataBase connection
mongoose.connect(`${MONGO_SERVER_URL}`
,{useNewUrlParser:true});

app.listen(PORT,()=>{ 
    console.log("Listen "+ PORT);
});