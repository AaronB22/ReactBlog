const router =require('express').Router()
const Chatroom = require('./models/Chatrooms')
const User= require('./models/User')
const Follow= require('./models/Followers')

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


router.get('/findChatRoom/:name', async(req, res)=>{
     
        console.log('getting req')
        const params= req.params.name
       const q=await Chatroom.find({}).where('name').equals(params)
       res.json(q)
    })

router.post('/newChatRoom', ({body}, res)=>{
    console.log(body)
    Chatroom.insertMany(body)
        .then(x=>{
            res.json(x)
        })
})

router.get('/getUser/:id', async(req, res)=>{
    const params=req.params.id;
    const q=await User.find({}).where('googleId').equals(params)
    res.json(q)
})

router.post('/newUser', ({body},res)=>{
    User.insertMany(body)
        .then(x=>{
            res.json(x)
        })
})

router.get('/getFollow/:id',async (req, res)=>{
    const params=req.params.id;
    const q=await Follow.find({}).where('id').equals(params)
})








module.exports = router