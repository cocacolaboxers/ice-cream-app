const mongoose = require('mongoose')
const validator = require('validator')
require('./user')

const OrderSchema = new mongoose.Schema ({
    description: {
        type: String,
        required: true
    },
    price: {
        //type: Number, //Fix this
        //required: true
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

const Order = mongoose.model('Order', OrderSchema)
module.exports = Order