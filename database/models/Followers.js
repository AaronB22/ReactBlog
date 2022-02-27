const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FollowerSchema=new Schema({
  userName:{
      type: String
  },
  FollowingUserName:{
      type: String
  }
})

const Follow= mongoose.model('follow', FollowerSchema);

module.exports=Follow