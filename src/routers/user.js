const express = require('express')
const router = express.Router()
const User = require('../model/users')
const auth = require('../middleware/authentication')

    router.post('/users', auth,  (req, res) =>{
        console.log(req.body)
    })
//creating a new user
router.post('/userreg', async (req, res) => {
    try{
       const user = await new User(req.body)
       res.status(202).send()
       user.save()
    }catch(e) {
       res.status(404).send()
    }
})

//login existance account
router.post('/userreg/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.pwd)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(e){
        res.status(404).send()
        console.log(e)
    }
})


//login user using email and password
router.post('/userreg/login', async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.pwd)
        res.send(user)

    }catch(e){
        res.status(404).send()
        console.log(e)
    }
})

router.post('/adminloginn', async (req, res) => {
    try{
        const email = await User.findByCredentials(req.body.email)
        res.send(email)
    }catch(e){
        res.status(404).send()
        console.log(e)
    }
})

router.get('/user', auth, (req, res)=> {
        res.send(req.user)
})

module.exports = router

