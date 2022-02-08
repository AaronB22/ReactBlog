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
router.get('/getChatRoomList', async(req, res)=>{
    const q= await Chatroom.find()
   
    res.json(q)
})



router.get('/findChatRoom/:name', (req, res)=>{
     
        console.log('getting req')
        const params= req.params.name
       const q=Chatroom.find({}).where(' chatroomName').equals(params)
        q.then(()=>console.log('Done'))
        
    })

router.post('/newChatRoom', ({body}, res)=>{
    console.log(body)
    Chatroom.insertMany(body)
        .then(x=>{
            res.json(x)
        })
})










module.exports = router