const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FollowerSchema=new Schema({
  id:{
      type: String
  },
  followingId:{
      type: String
  }
})

const Follow= mongoose.model('follow', FollowerSchema);

module.exports=Follow