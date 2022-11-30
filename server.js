require('dotenv').config({path: './config/config.env',});
const PORTNUM = process.env.PORTNUM
const mongoose = require("mongoose")

const Db = process.env.DATABASE

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Connected!")
})




const app = require("./app")

app.listen(PORTNUM, ()=>{
    console.log(`App is Listening to ${PORTNUM}`)
})