const jwt = require('jsonwebtoken')
const User = require('../model/users')

const auth = async (req, res, next ) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const decode = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findById({_id : decode._id, 'tokens.token' : token})
        if(!user){
            throw Error('No User')
        }
            req.user = user
            next()
    }catch(e){
        console.log(e)
    }
    next()

//     try{
//         const token = req.header('Authorization').replace('Bearer ', '')
//         console.log(token)

//     }catch(e){
//         res.status(401).send({error: 'Please Authentcter'})
//     }
// }
}

module.exports = auth

