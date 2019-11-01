const mongoose = require('mongoose')
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
        type: Date
        //required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

const OrderPack = mongoose.model('OrdersPack', OrderPackSchema)
module.exports = OrderPack