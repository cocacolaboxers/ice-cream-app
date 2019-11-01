const express = require('express')
require('./mongodb/mongoose')
const User = require('./mongodb/models/user')

const app = express()
const port = 3000

app.use(express.json())

app.post('/users', (req,res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((error) => {
        console.log('Error', error)
    })
})

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})