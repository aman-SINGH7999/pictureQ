const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    email : String,
    phone : Number,
    quary : String,
})

module.exports = mongoose.model('contacts',ContactSchema);    