//.js file that manages User router. Here is provided the logic to
//perform the create, find, list all users and delete operations on users
// in the database.

const express = require('express')
const router = new express.Router()
const User = require('../models/user')

// Sign up/create new user logic
router.post('/users/signup', (req,res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

//Log in logic -- if the email and password of the username are found in the db, 
//the user exists and can be logged in. 
router.post('/users/login', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    }catch(e){
        res.status(400).send()
    }
})

//Get all users in the database
router.get('/users', (req,res) => {
    User.find({}).populate('orders').then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Get a single user by its id (or nothing if it doesn't exist)
router.get('/users/:id', (req,res) => {
    const _id = req.params.id
    User.findById(_id).populate('orders').then((user) => {
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Delete a user after finding it by its ID, 
//the method sends back the info that matches the deleted user
router.delete('/users/:id', (req,res) => {
    const _id = req.params.id
    User.findByIdAndDelete(_id).populate('orders').then((user) => {
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Export the router so it can be used by other files 
module.exports = router