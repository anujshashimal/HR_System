const express = require('express')
const router = new express.Router()
const leave = require('../model/leave')
const auth = require('../middleware/authentication')

    router.post('/addtask', (req, res) =>{
        console.log(req.body)
    })

    router.post('/leavee', auth, async (req, res) => {
            const leaveinfo = new leave({
                ...req.body,
                owner: req.user._id
            })
        //    const levdeinfo = await new leave(req.body)
        try{
           await leaveinfo.save()
           res.status(202).send()
        }catch(e) {
           res.status(404).send() 
        }
    })

    router.post('/addleave', async (req, res) => {
        const leavee = new leave(req.body)
        try {
            await leavee.save()
            const token = await leave.generateAuthToken()
            res.status(201).send({ leavee, token })
            
        } catch (e) {
            res.status(400).send(e)
        }
    })


module.exports = router

