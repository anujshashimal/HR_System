const mongoose = require('mongoose')
const User = require('../model/users')

const userleaveSchema = new mongoose.Schema({
    lvdate: {
        type : String,
        required: true,
        
    },lvtype: {
        type : String,
        required: true,
    },
    owner: {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }
})

const leave = mongoose.model('leave', userleaveSchema)

module.exports = leave
