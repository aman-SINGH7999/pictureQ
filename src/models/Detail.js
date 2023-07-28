const mongoose = require('mongoose')

const DetailSchema = new mongoose.Schema({
    brand_name : String,
    brand_icon_url : String,
})

module.exports = mongoose.model('detail',DetailSchema);