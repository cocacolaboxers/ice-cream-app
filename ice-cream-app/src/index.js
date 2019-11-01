const express = require('express')

const app = express()
const port = 3000

app.post('/users', (req,res) => {
    res.send('o keloke okuuur!')
})

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})