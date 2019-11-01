const express = require('express')
const router = new express.Router()
const OrdersPack = require('../models/ordersPack')

router.post('/ordersPacks', (req,res) => {
    const ordersPack = new OrdersPack(req.body)

    ordersPack.save().then(() => {
        res.send(ordersPack)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

router.get('/ordersPacks', (req,res) => {
    OrdersPack.find({}).populate('orders').then((ordersPacks) => {
        res.send(ordersPacks)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

router.get('/ordersPacks/:id', (req,res) => {
    const _id = req.params.id
    OrdersPack.findById(_id).populate('orders').then((ordersPack) => {
        if(!ordersPack){
            return res.status(404).send()
        }
        res.send(ordersPack)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

router.patch('/ordersPacks/:id', async (req,res) => {
        try{
            const ordersPack = await OrdersPack.findByIdAndUpdate(req.params.id, 
                req.body, {new: true, runValidators: true})
            
            if(!ordersPack){
                return res.status(404).send()
            }

            res.send(ordersPack)
        } catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/ordersPacks/:id', (req,res) => {
    const _id = req.params.id
    OrdersPack.findByIdAndDelete(_id).populate('orders').then((ordersPack) => {
        if(!ordersPack){
            return res.status(404).send()
        }
        res.send(ordersPack)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

module.exports = router