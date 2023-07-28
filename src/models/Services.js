const mongoose = require('mongoose')

const ServicesSchema = new mongoose.Schema({
    icon : String,
    title : String,
    description : String,
    link_text : String,
    link : String
})

module.exports = mongoose.model('service',ServicesSchema)