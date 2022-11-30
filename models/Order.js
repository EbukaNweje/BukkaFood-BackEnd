const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    products: {type: Array, required: true},
    Address: {type: String, required: true},
    phone: {type: String, required: true},
    amount:{type: Number, required: true},
}, {timestamps:true })

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel