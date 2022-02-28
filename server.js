const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const io = require('socket.io', {
  rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling']
})(3001, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5000']
  }
})

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
io.on("connection", socket =>{
  console.log('USER CONNECTED')
  socket.on('send-msg', (msgObj)=>{
    console.log(msgObj)
    const chatroomId=msgObj.id
      console.log('getting msg')
    io.emit(chatroomId, msgObj)
  })
  socket.on('chatroom_joined',(data)=>{
    socket.join(data);
    console.log(data)
    User.updateOne({userName:data.customName},{
      location:data.chatRoomTitle
    }).then((res)=>{
      console.log('done')
    })
  })
  socket.on('disconnect',(data)=>{
    console.log('USER DISCONNECTED', data)
  })
})



app.listen(port, () => console.log(`Listening on port ${port}`));