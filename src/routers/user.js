const express = require('express')
const router = express.Router()
const User = require('../model/users')

// router.get('/h', (req, res) => {
//     res.send('This is Router')
// })

// router.post('/h', (req, res)=> {
//     res.send('This is Router')
// })

// router.post('/home', (req, res) => {
//     const userDet = new Userss(req.body)
//       userDet.save()
//       .then(item => {
          
//     })
//       .catch(err => {
//           res.status(400).send("Unable to save to database");
//       });
//    });

   router.post('/users', (req, res) => {
    res.send('Testing!')

    })

    router.post('/userlo', (req, res) =>{
        console.log(req.body)
    })


    //create a new user

module.exports = router

