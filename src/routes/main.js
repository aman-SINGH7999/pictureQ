const express = require('express')
const router = express.Router();
const Detail = require('../models/Detail')
const Slider = require('../models/Slider')
const Services = require('../models/Services')
const Contact = require('../models/Contact')
const Gallary = require('../models/Gallary')

router.get('', async (req,res)=>{
    const details = await Detail.findOne({});
    const slider = await Slider.find({})
    const services = await Services.find({});
    // console.log(services)
    res.render("index", {
        details : details, 
        slider : slider,
        services : services
    });
})

router.get('/gallary', async (req,res)=>{
    const details = await Detail.findOne({});
    const gallary = await Gallary.find({});
    res.render("gallary", {details : details, gallary : gallary})
})

router.post('/process-contact-form', async (req,res)=>{
    try{
        await Contact.create({
            email : req.body.email,
            phone : req.body.phone,
            quary : req.body.quary,
        })
    }catch(err){
        console.log(err)
    }
    res.redirect("/")
})

module.exports = router