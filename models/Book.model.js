"use strict"
const mongoose = require("mongoose");



const bookSchema =new mongoose.Schema({
  title: String,
  descriptions: String,
  status: Boolean,
  email:String

});



const bookModel = mongoose.model('book',bookSchema);

    let  seedBook=()=>{
        let book1 =  new bookModel({
            title :'Clean code',
            descriptions:'this book about how to make your code clean and stander to be redable and maintainalbe',
            status:true,
            email:'assdfasdfgmail.com'
        });
        book1.save();
       
        let book2 =  new bookModel({
            title :'Javascript',
            descriptions:'this book about javascript ',
            status:true,
            email:'assdfasdfgmail.com'
        });
        book2.save();
       let book3 =  new bookModel({
            title :'python',
            descriptions:'this book about python ',
            status:false,
            email:'assdfasdfgmail.com'
        });
        book3.save();
    }







module.exports={
    seedBook
    ,
    bookModel
};











