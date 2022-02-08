const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatRoomSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
})

const Chatroom= mongoose.model("Chatroom", chatRoomSchema)

module.exports = Chatroom