const express = require("express")
const product = require("../controllers/product")
const {verifyAdmin} = require("../utilities/VerifyToken")

const Router = express.Router()

Router.route("/addproduct").post(verifyAdmin, product.CreateProduct)
Router.route("/allproduct").get(product.GetallProuct)
Router.route("/delete/:id").delete(verifyAdmin, product.DeleteProuct)

module.exports = Router