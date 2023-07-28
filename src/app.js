const express = require('express')
const app = express();
const hbs = require('hbs')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/main')
// const Detail = require('./models/Detail')
// const Slider = require('./models/Slider')
// const Services = require('./models/Services')
// const Gallary = require('./models/Gallary')

//template-engine
app.set('view engine','hbs');
app.set('views',"views")
app.use(body_parser.urlencoded({
    extended:true
}))

//static file
app.use("/static",express.static("public"))

//parser register
hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://0.0.0.0:27017/my_website").then((result)=>{
    console.log("DB connected successfully!");

    // Gallary.create([
    //     { img : "/static/images/logo.jpg" },
    //     { img : "/static/images/slider1.jpg" },
    //     { img : "/static/images/slider2.jpg" },
    //     { img : "/static/images/slider3.jpg" },
        // { img : "/static/images/g5.jpg" },
        // { img : "/static/images/g6.jpg" },
        // { img : "/static/images/g7.jpg" },
        // { img : "/static/images/g8.jpg" },
        // { img : "/static/images/g9.jpg" },
        // { img : "/static/images/g10.jpg" },
        // { img : "/static/images/g11.jpg" },
        // { img : "/static/images/g12.jpg" },
        // { img : "/static/images/g13.jpg" }
    // ])

    // Services.create([
    //     {
    //         icon : "fab fa-accusoft",
    //         title : "Provied best course",
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum at quisquam quod ipsa magnam!",
    //         link_text : "https://github.com/",
    //         link : "Check"   
    //     },
    //     {
    //         icon : "fab fa-affiliatetheme",
    //         title : "Provied best course",
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum at quisquam quod ipsa magnam!",
    //         link_text : "https://github.com/",
    //         link : "Learn"   
    //     },
    //     {
    //         icon : "fab fa-accusoft",
    //         title : "Provied best course",
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum at quisquam quod ipsa magnam!",
    //         link_text : "https://github.com/",
    //         link : "Check"   
    //     },
    //     {
    //         icon : "fab fa-affiliatetheme",
    //         title : "Provied best course",
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum at quisquam quod ipsa magnam!",
    //         link_text : "https://github.com/",
    //         link : "Learn"   
    //     },
    //     {
    //         icon : "fab fa-accusoft",
    //         title : "Provied best course",
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum at quisquam quod ipsa magnam!",
    //         link_text : "https://github.com/",
    //         link : "Check"   
    //     },
    //     {
    //         icon : "fab fa-affiliatetheme",
    //         title : "Provied best course",
    //         description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum at quisquam quod ipsa magnam!",
    //         link_text : "https://github.com/",
    //         link : "Learn"   
    //     },
    // ])

    // Detail.create({
    //     brand_name : "SPIDER-MAN",
    //     brand_icon_url : "static/images/logo.jpg"
    // })

    // Slider.create([
    //     {
    //         img_url : "static/images/slider1.jpg",
    //         title : "This is Anime Image",
    //         subtitle : "Anime is cortoon and feel good to watch"
    //     },
    //     {
    //         img_url : "static/images/slider2.jpg",
    //         title : "This is Image of a Planet",
    //         subtitle : "This palanet is not from our galaxy"
    //     },
    //     {
    //         img_url : "static/images/slider3.jpg",
    //         title : "This is Image of Spider-man",
    //         subtitle : "Spider man is a super hero Who save the world"
    //     }
    // ])

}).catch((err)=>{
    console.log("ERROR : ",err)
})

//routes
app.use('/', router)

app.listen(process.env.PORT | 5556, ()=>{
    console.log('Server is listining at port 5556');
})