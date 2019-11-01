const mongoose = require('mongoose')
const validator = require('validator')
require('./user')

const OrderSchema = new mongoose.Schema ({
    description: {
        type: String,
        required: true
    },
    price: {
        type: double,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    paymentMethod: {
        type: String,
        enum: ['Efectivo', 'Tarjeta'], default: 'Tarjeta'
    },
    payed: {
        tyoe: Boolean,
        default: false
    }
})

const Order = mongoose.model('Order', UserSchema)
module.exports = Order