const mongoose = require('mongoose')
const validator = require('validator')

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

    }
})

const user = mongoose.model('user', userSchema)
module.exports = user
