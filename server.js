const express = require('express');
const root = require('path').join(__dirname, 'build')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path= require('path')
// const server= http.createServer()
// const io = require('socket.io', {
//   rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling']
// })(3001, {
//   cors: {
//     origin: ['http://localhost:3000', 'http://localhost:5000']
//   }
// })

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
// app.use(express.static)



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactBlogDB',  {
  useNewUrlParser: true,
});

app.use(require("./database/routesdb"))
const User=require('./database/models/User')
const http= require('http')
const server= http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
io.on("connection", socket =>{
  console.log('USER CONNECTED')
  socket.on('send-msg', (msgObj)=>{
    const chatroomId=msgObj.id
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
})


app.use(express.static(root));

app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})


app.listen(port, () => console.log(`Listening on port ${port}`));