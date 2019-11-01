//.js file to provide the moongose schema and model that will be later
//used by the routers. This one corresponds to the order and its attributes

const mongoose = require('mongoose')
require('./user')
require('./order')

//Define the schema
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

//Create the model
const OrdersPack = mongoose.model('OrdersPack', OrderPackSchema)

//Export the model
module.exports = OrdersPack