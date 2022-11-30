require('dotenv').config({path: './config/config.env',});
const mongoose = require("mongoose")

const Db = process.env.DATABASE

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Connected!")
})




const app = require("./app")

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`connected`)
})