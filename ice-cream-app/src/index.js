//Handling of routing, app startup and port setup

const express = require('express')
require('./mongodb/mongoose')

//Routers
const ordersRouter = require('./mongodb/routers/order')
const usersRouter = require('./mongodb/routers/user')
const ordersPacksRouter = require('./mongodb/routers/ordersPack')

const app = express()
const port = 3000

app.use(express.json())

//Making routers usable
app.use(usersRouter)
app.use(ordersRouter)
app.use(ordersPacksRouter)

//Starting server
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})