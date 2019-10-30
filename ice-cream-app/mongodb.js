const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'ice-cream-app'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Jose',
        email: 'tomasdiaz898@hotmail.com'
    }, (eror, result) => {
        if(error){
            return console.log('Unable to insert user into collection')
        }

        console.log(result.ops)
    })
})