const mongoose = require("mongoose");



let userSchema = new mongoose.Schema ({
    username :String,
    email: String
});



let userModel = mongoose.model('User',userSchema);

module.exports= userModel;






