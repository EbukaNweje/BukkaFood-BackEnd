const express = require("express")
const Order = require("../controllers/Order")
const {verifyAdmin} = require("../utilities/VerifyToken")

const Router = express.Router()

Router.route("/orderfood").post(Order.createOrder).get(verifyAdmin, Order.GetAllOrder)

module.exports = Router