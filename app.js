const express = require("express");
const Products = require("./routes/product");
const AuthRoutes = require("./routes/auth")
const order = require("./routes/Order")
const cookkieParser = require("cookie-parser")
const fileUploader = require("express-fileupload")


const app = express()
app.use(fileUploader({
    useTempFiles: true
}))
app.use(cookkieParser())
app.use(express.json());

app.use("/api/v1/bukkafood/", AuthRoutes)
app.use("/api/v1/bukkafood/", Products)
app.use("/api/v1/bukkafood/", order)

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
     success: false,
     status: errorStatus,
     message: errorMessage,
     stack: err.stack,
    })
 })


app.get("/", (req, res) =>{
    res.status(200).send("Bukka Food Api")
})

module.exports = app