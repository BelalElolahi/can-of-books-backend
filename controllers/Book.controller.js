"use strict";


const {bookModel} = require('../models/Book.model');


let gitAllBookController = (req,res)=>{

    bookModel.find().then(data=>{
        res.json(data);
    });
}
module.exports=gitAllBookController;