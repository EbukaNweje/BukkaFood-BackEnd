const orderModel = require("../models/Order")
const nodemailer = require('nodemailer');

exports.createOrder = async (req, res, next) => {
    try {
        const NewOrder = await orderModel.create(req.body)
        // console.log(NewOrder)
        res.status(200).send("Order has been created.")

    } catch (err) {
        next(err)
    }
}

exports.GetAllOrder = async (req, res, next) => {
    try {
        const AllOrder = await orderModel.find()
        // console.log(AllOrder)
        res.status(200).json(AllOrder)

    } catch (err) {
        next(err)
    }
}