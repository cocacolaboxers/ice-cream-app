const express = require('express')
require('./mongodb/mongoose')
const User = require('./mongodb/models/user')
const Order = require('./mongodb/models/order')


const app = express()
const port = 3000

app.use(express.json())

app.post('/users', (req,res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/orders', (req,res) => {
    const order = new Order(req.body)

    order.save().then(() => {
        res.send(order)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})