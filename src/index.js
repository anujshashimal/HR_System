const express = require('express')
require('../src/db/connection')
const newUser = require('../src/model/users')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//create a new user
app.post('/createu', (req, res) => {
    const user = new newUser(req.body)
    user.save()
})

//reading a new user








