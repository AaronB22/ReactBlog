const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
let test=0
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
io.on("connection", socket =>{
  console.log('USER CONNECTED')
  socket.on('send-msg', (msgObj)=>{
    console.log(msgObj)
    const chatroomId=msgObj.id
    console.log(chatroomId)
    io.emit(chatroomId, msgObj)
  })
  socket.on('chatroom_joined', (data)=>{
    socket.join(data);
    console.log("New User")
  })
  socket.on('disconnect',()=>{
    console.log('USER DISCONNECTED')
  })
})



app.listen(port, () => console.log(`Listening on port ${port}`));