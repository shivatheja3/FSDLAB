const mongoose = require('mongoose')

const aliensSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        default: false
    }
})


module.exports = new mongoose.model("Alien", aliensSchema)