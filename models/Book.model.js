"use strict"
const mongoose = require("mongoose");
const userModel = require("./User.model")



const bookSchema =new mongoose.Schema({
  title: String,
  descriptions: String,
  status: String,
  userEmail:String

});



const bookModel = mongoose.model('book',bookSchema);

     

    let  seedBook=()=>{
        let user = new userModel({
            username :'Samohas',
            email:"adsfasdfasdf@gmail.com"   
          })
    
          user.save();
        let book1 =  new bookModel({
            title :'Clean code',
            descriptions:'this book about how to make your code clean and stander to be redable and maintainalbe',
            status:true,
            userEmail:user.email
        });
        book1.save();
       
        let book2 =  new bookModel({
            title :'Javascript',
            descriptions:'this book about javascript ',
            status:true,
            userEmail:user.email
        });
        book2.save();
       let book3 =  new bookModel({
            title :'python',
            descriptions:'this book about python ',
            status:false,
            userEmail:user.email
        });
        book3.save();
    }
module.exports={
    seedBook
    ,
    bookModel
};











