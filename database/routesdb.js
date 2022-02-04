const router =require('express').Router()
const Chatroom = require('./models/Chatrooms')

// console.log('routes loading')

// router.post('/msg', ({body}, res)=>{
//     console.log(body)
//     Message.insertMany(body)
//     .then(dbMsg=>{
//         res.json(dbMsg)
//     })
// });

router.get('/findChatRoom/:name', (req, res)=>{
     
        console.log('getting req')
        const params= req.params.name
       const q=Chatroom.find({}).where(' chatroomName').equals(params)
        q.then(()=>console.log(q))
        
    })

router.post('/newChatRoom', (req, res)=>{
    Chatroom.insertMany
})
// router.get('/getMsg',(req, res)=>{
//     Message.find({}, '-_id')
//     .then(db =>{
//         res.json(db)
//     })
// })









module.exports = router