const mongoose = require('mongoose')
const validator = require('validator')
require('./order')
require('./ordersPack')

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
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
        type: mongoose.Schema.Types.ObjectId, ref: 'OrdersPack'
    }],
})

//
UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user){
        throw new Error('Unable to login');
    }

    const passwordsMatch = (password === user.password)
    if(!passwordsMatch){
         throw new Error('Unable to login');
    }
    
    return user
}

const User = mongoose.model('User', UserSchema)
module.exports = User