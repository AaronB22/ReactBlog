const router =require('express').Router()
const Chatroom = require('./models/Chatrooms')

router.get('/getChatRoomList', async(req, res)=>{
    const q= await Chatroom.find()
    res.json(q)
})

router.get('/getChatRoomById/:id', async(req, res)=>{
    try{
    const params= req.params.id
    const q = await Chatroom.find({}).where('_id').equals(params)
    res.json(q)
    }
    catch(err){
        console.log(err)
    }
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