const express = require('express');
const root = require('path').join(__dirname, 'client/build')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));




mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactBlogDB',  {
  useNewUrlParser: true,
});

app.use(require("./database/routesdb"))
const User=require('./database/models/User')

let socketOrigin
if(port===5000){
  socketOrigin='http://localhost:5000'
  console.log(process.env.PORT)
}
else{
  socketOrigin=process.env.PORT
  console.log(process.env.PORT)
}
const io = require("socket.io")(8900,{
  cors:{
    origin:['http://localhost:3000','https://aaronb22-reactblog.herokuapp.com/']
  }
})

io.on("connection", socket =>{
  console.log('USER CONNECTED')
  socket.on('send-msg', (msgObj)=>{
    const chatroomId=msgObj.id
    io.emit(chatroomId, msgObj)
  })
  socket.on('chatroom_joined',(data)=>{
    socket.join(data);
    
    User.updateOne({userName:data.customName},{
      location:data.chatRoomTitle
    }).then((res)=>{
    })
  })
})


app.use(express.static(root));

app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})


app.listen(port, () => console.log(` Listening on port ${port}`));