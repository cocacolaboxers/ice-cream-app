const mongoose = require('mongoose')
require('./user')
require('./order')

const OrderPackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Order'
    }],
    expirationDate: {
        type: Date,
        required: false
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

const OrdersPack = mongoose.model('OrdersPack', OrderPackSchema)
module.exports = OrdersPack