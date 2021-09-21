"use strict";


const {bookModel} = require('../models/Book.model');



let gitAllBookController = async (req,res)=>{
   
    try {

        let books = await bookModel.find({});
        res.json(books);

    } catch(err)
    {
        res.status(500).json({ mesage: err.mesage })
    }
    
}

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



const deleteBookController = async (req,res)=>{
       
   
    try {
     await bookModel.findByIdAndDelete(req.params.id);
      
         bookModel.find({}).then(books=>{
           res.json(books);
       });
        
    } catch (err) {
        
        res.status(500).json({message : err.message});
        
    }

     /*try {
     await res.rem

     } catch {

     }*/
     
    /*bookModel.findByIdAndDelete(id,(err,data)=>{
         if (err)
        {
            res.status(500).send("an error occured");

         } else 
         {
             bookModel.find({}).then(books=>{
                 res.json(books);
             })
         }
         

    })*/


}




module.exports=
{
    gitAllBookController,
    CreateBookController,
    deleteBookController
}