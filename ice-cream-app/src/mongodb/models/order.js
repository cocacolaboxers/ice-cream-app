//.js file to provide the moongose schema and model that will be later
//used by the routers. This one corresponds to the order and its attributes

const mongoose = require('mongoose')
const validator = require('validator')
require('./user')

//Define the schema
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

//Define the model
const Order = mongoose.model('Order', OrderSchema)

//Export the model
module.exports = Order