const express = require('express')
require('../src/db/connection')
const newUser = require('../src/model/users')
const userrouter = require('../src/routers/user')
const usertask = require('./model/leave')
const path = require('path')
const app = express()
const port = 3000 
const jwt = require('jsonwebtoken')

app.use(express.json())
// app.set('views', path.join(__dirname + '../views/'))

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

app.use(userrouter)

app.get('/user', (req, res)=> {
    newUser.find({}).then((user) => {
        res.send(user)
        console.log(req.body)
        }).catch((e) => {
    })
})

//fetching specific user details

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    newUser.findById(id).then((user) => {
        if(!user){
            return res.send(404).send
        }
        res.send(user)
    }).catch((e) => {
        return res.send(404).send
    })
})

//update user using id

app.patch('/user/:id', async (req, res) => {
    try{
        const user = await newUser.findByIdAndUpdate(req.params.id,  req.body, { new : true, runValidator : true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

const myFun = async () => {
    try{
    const token = jwt.sign({ _id : 'anuj'},'This is my token' , { expiresIn : '7d'})
    console.log(token)

    const ver = jwt.verify(token, 'This is my token')

}catch(e){
    console.log(e)

}
}
myFun()

