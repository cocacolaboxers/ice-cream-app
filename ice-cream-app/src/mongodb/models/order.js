const mongoose = require('mongoose')
const validator = require('validator')
require('./user')

const OrderSchema = new mongoose.Schema ({
    description: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Decimal128,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    paymentMethod: {
        type: String,
        enum: ['Efectivo', 'Tarjeta'], default: 'Tarjeta',
        required: true
    },
    payed: {
        type: Boolean,
        default: false
    }
})

const Order = mongoose.model('Order', OrderSchema)
module.exports = Order