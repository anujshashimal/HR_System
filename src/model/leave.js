const mongoose = require('mongoose')

const usertaskSchema = new mongoose.Schema({
    lvdate: {
        type : String,
        required: false,
        
    },lvtype: {
        type : String,
        required: false,
    }
})

const tasks = mongoose.model('tasks', usertaskSchema)

module.exports = tasks
