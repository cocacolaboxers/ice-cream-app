const mongoose = require('mongoose')
const validator = require('validator')

const connectionSTRING = 'mongodb://127.0.0.1:27017/ice-cream'

mongoose.connect(connectionSTRING, { useNewUrlParser: true, useCreateIndex: true })

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        required: true
    }
})

const me = new User({
    name: 'Jose',
    email: 'tomasdiaz898hotmail.com',
    password: '1234'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})