const mongoose = require('mongoose')

const SliderSchema = new mongoose.Schema({
    img_url : String,
    title : String,
    subtitle : String,
    class : String
})

module.exports = mongoose.model('slider',SliderSchema);    