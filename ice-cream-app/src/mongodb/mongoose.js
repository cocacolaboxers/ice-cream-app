//Think of this as the mongoose config file

//Require mongoose
const mongoose = require('mongoose')

//Set connection string (to local database)
const connectionSTRING = 'mongodb://127.0.0.1:27017/ice-cream'

//Start connection
mongoose.connect(connectionSTRING, { useNewUrlParser: true, useCreateIndex: true })