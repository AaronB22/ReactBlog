const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    googleId:{
        type:String
    },
    name:{
        type: String,
        trim: true
    },
    userName:{
        type:String,
        unique: true,
        trim: true
    },
    bio:{
        type: String,
        required: false
    }
})

const User= mongoose.model("User", userSchema)

module.exports = User