const mongoose = require('mongoose')
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
     
    },pwd: {
        type : String,
        required: true,

    }, tokens: [{
        token:{
        type: String, 
        required : true
    }
    }]},
    {
        timestamps: true
    })

//methods can access the instances
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')
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

const user = mongoose.model('user', userSchema)
module.exports = user
