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
        const params= req.params.name
       const q=await Chatroom.find({}).where('name').equals(params)
       res.json(q)
    })

router.post('/newChatRoom', ({body}, res)=>{
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

router.get('/getUserByUserName/:name', async(req, res)=>{
    const params=req.params.name;
    const q=await User.find({}).where('userName').equals(params)
    res.json(q)
})



router.post('/newUser', ({body},res)=>{
    User.insertMany(body)
        .then(x=>{
            res.json(x)
        })
})

router.post('/updateUser',async({body}, res)=>{
    const q= await User.updateOne({googleId:body.googleId}, {
        userName:body.userName,
        bio: body.bio
    })
    res.send(q)
})

router.get('/getFollow/:userName',async (req, res)=>{
    const params=req.params.userName;
    const q=await Follow.find({}).where('userName').equals(params)
    res.send(q)
})

router.get('/getUserByUserName/:userName', async(req,res)=>{
    const params= req.params.userName;
    const q= await User.find({}).where('userName').equals(params)
    res.send(q)
})

router.post('/followUser', async({body}, res)=>{
    const q= await Follow.insertMany(body)
    res.send(q)
})

router.get('/deleteFollow/:userName/:FollowingUserName', async(req,res)=>{
    const params= req.params
    console.log(params)
    Follow.deleteOne(params,(err, result)=>{
        if(err) throw err;
        console.log(result)
    })
})

router.get('/getLocation/:name', async (req, res)=>{
    const params=req.params.name;
    const q=await User.find({}).where('userName').equals(params)
    const loc={
        "location":q[0].location
    }
    res.json(loc)
})






module.exports = router