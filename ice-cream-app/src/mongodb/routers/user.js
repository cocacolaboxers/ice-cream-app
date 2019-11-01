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

//Log in logic
router.post('/users/login', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    }catch(e){
        res.status(400).send()
    }
})

router.get('/users', (req,res) => {
    User.find({}).populate('orders').then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

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

module.exports = router