const express = require('express')
require('./mongodb/mongoose')
const Order = require('./mongodb/models/order')
const userRouter = require('./mongodb/routers/user')

const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)

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