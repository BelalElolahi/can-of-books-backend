"use strict";


const {bookModel} = require('../models/Book.model');




//Git All Books  
let gitAllBookController = async (req,res)=>{
   
    try {

        let books = await bookModel.find({});
        res.json(books);

    } catch(err)
    {
        res.status(500).json({ mesage: err.mesage })
    }
    
}
// Create Book
const CreateBookController= async (req,res)=>{
      
    let Book = new bookModel ({
        title:req.body.title,
        descriptions : req.body.descriptions,
        status : req.body.status,
        email: req.body.email
    })
    try {
        Book.save();
        let bookList = await bookModel.find({});
        res.status(201).json(bookList);

    } catch (err) {
        res.status(400).json({ mesage: err.mesage })

    }
}
// delete book
const deleteBookController = async (req,res)=>{
    try {
     await bookModel.findByIdAndDelete(req.params.id);
      
         bookModel.find({}).then(books=>{
           res.json(books);
       });
        
    } catch (err) {
        
        res.status(500).json({message : err.message});
        
    }
}

//update book
const  updateBookController = async (req , res )=>
{
    let updateBook = await bookModel.findById(req.params.id)
    console.log(updateBook);
    updateBook.title=req.body.title;
    updateBook.descriptions = req.body.descriptions;
    updateBook.status = req.body.status;
    updateBook.email=req.body.email;

     
    
    try{
         await updateBook.save();
         let books = await bookModel.find({});
         res.status(201).json(books);
                
     }catch(err){
        res.status(400).json({message : err.message});

     }
}




module.exports=
{
    gitAllBookController,
    CreateBookController,
    deleteBookController,
    updateBookController
}