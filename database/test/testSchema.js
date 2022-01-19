const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message:  {
        type: String,
        trim: true,
        required: "Message Here"
    }
})

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;