const mongoose = require('mongoose')
const Schema = mongoose.Schema()


const orderSchema = new Schema({
    productType: { type: String, required: true },
    quantity: { type: Number, required: true },
    washType: { type: [String], required: true },
    price: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
})

const orderModel = mongoose.model('orders', orderSchema)

module.exports = orderModel