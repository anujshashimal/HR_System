const mongoose = require('mongoose')

const userleaveSchema = new mongoose.Schema({
    lvdate: {
        type : String,
        required: false,
        
    },lvtype: {
        type : String,
        required: false,
    },
    owner: {
        type : mongoose.Schema.Types.ObjectId,
        required : true

    }
})

const leave = mongoose.model('leave', userleaveSchema)

module.exports = leave
