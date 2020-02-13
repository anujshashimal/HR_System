const express = require('express')
const router = express.Router()
const User = require('../model/leave')

  
    router.post('/addtask', (req, res) =>{
        console.log(req.body)
    })

module.exports = router

