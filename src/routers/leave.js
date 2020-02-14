const express = require('express')
const router = new express.Router()
const leave = require('../model/leave')
const auth = require('../middleware/authentication')


    router.post('/addtask', (req, res) =>{
        console.log(req.body)
    })

    router.post('/leave', auth, async (req, res) => {
            const leaveinfo = new leave({
                ...req.body,
                owner: req.users._id
            })
        //    const levdeinfo = await new leave(req.body)
        try{
            
           await leaveinfo.save()
           res.status(202).send()

        }catch(e) {
           res.status(404).send() 
        }
    })
    
module.exports = router

