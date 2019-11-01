const mongoose = require('mongoose')
const validator = require('validator')
require('./user')
require('./order')

const OrderPackSchema = mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Order'
    }],
    expirationDate: {
        type: Date,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

const OrderPack = mongoose.model('OrderPack', OrderPackSchema)
module.exports = OrderPack