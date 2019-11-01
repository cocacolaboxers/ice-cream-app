const mongoose = require('mongoose')

const connectionSTRING = 'mongodb://127.0.0.1:27017/ice-cream'

mongoose.connect(connectionSTRING, { useNewUrlParser: true, useCreateIndex: true })