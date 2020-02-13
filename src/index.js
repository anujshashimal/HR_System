const express = require('express')
require('../src/db/connection')
const newUser = require('../src/model/users')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//creating a new user
app.post('/createu', async (req, res) => {
     try{
        const user = await new newUser(req.body)
        user.save()
     }catch(e) {
        res.status(404).send()
     }
})

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










