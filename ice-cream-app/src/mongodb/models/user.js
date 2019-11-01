//.js file to provide the moongose schema and model that will be later
//used by the routers.This one corresponds to the order and its attributes

const mongoose = require('mongoose')
const validator = require('validator')
require('./order')
require('./ordersPack')

//Define the schema
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

//This method was created as part of the logging in logic, it checks
//if there is a user in the database whose email matches the input and then
//verifies the password. It returns the user if it can be logged in. 
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

//Create the model
const User = mongoose.model('User', UserSchema)

//Export the model
module.exports = User