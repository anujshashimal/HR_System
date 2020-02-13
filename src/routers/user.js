const express = require('express')
const router = express.Router()
const User = require('../model/users')

   router.post('/users', (req, res) => {
    res.send('Testing!')

    })

    router.post('/userlo', (req, res) =>{
        console.log(req.body)
    })



module.exports = router

