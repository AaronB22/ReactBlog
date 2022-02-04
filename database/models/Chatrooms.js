const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatRoomSchema = new Schema({
    chatroomName:{
        type: String,
        trim: true
    }
})

const Chatroom= mongoose.model("Chatroom", chatRoomSchema)

module.exports = Chatroom