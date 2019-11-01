const mongoose = require('mongoose')
const validator = require('validator')
require('./order')

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Order'
    }],
    packs: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'OrderPack'
    }],
})

const User = mongoose.model('User', UserSchema)
module.exports = User