const express = require('express')
require('./mongodb/mongoose')
const ordersRouter = require('./mongodb/routers/order')
const usersRouter = require('./mongodb/routers/user')
const ordersPacksRouter = require('./mongodb/routers/ordersPack')

const app = express()
const port = 3000

app.use(express.json())

app.use(usersRouter)
app.use(ordersRouter)
app.use(ordersPacksRouter)

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})