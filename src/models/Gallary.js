const mongoose = require('mongoose')

const GallarySchema = new mongoose.Schema({
    img : String,
})

module.exports = mongoose.model('gallary',GallarySchema)