const mongoose = require('mongoose');

const hobbiesSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    hobbies: String
})

const hobbiesModel = mongoose.model('hobby', hobbiesSchema)
module.exports = hobbiesModel
