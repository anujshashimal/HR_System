const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fname: {
        type : String,
        required: true,

    },lname: {
        type : String,
        required: true,

    },email: {
        type : String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }

    },pwd: {
        type : String,
        required: true,

    }, tokens: [{
        token:{
        type: String, 
        required : true
    }
    }]
})

//methods can access the instances

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({_id: user._id }, 'This is my token')

    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, pwd) => {
    const loginuser = await user.findOne({ email, pwd })
    if(!loginuser){
        throw new Error('Unable to login!')
    }
    return loginuser
}

userSchema.static.findByCredentials =  (email) => {
    const use = 'sha@gmail.com'

    if(use == email){
        return use
    }else{
        throw new Error('You have no permission to access to the portal!')
    }
}

const user = mongoose.model('user', userSchema)
module.exports = user
