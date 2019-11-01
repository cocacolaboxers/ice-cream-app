const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/users', (req,res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
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