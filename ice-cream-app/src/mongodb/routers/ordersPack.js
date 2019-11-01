//.js file that manages Orders Pack router. Here is provided the logic to
//perform the create, find, edit, list all packs and delete operations on Orders packs
// in the database.

const express = require('express')
const router = new express.Router()
const OrdersPack = require('../models/ordersPack')

//Create a new Orders Pack
router.post('/ordersPacks', (req,res) => {
    const ordersPack = new OrdersPack(req.body)

    ordersPack.save().then(() => {
        res.send(ordersPack)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

//Retrieve all Orders packs
router.get('/ordersPacks', (req,res) => {
    OrdersPack.find({}).populate('orders').then((ordersPacks) => {
        res.send(ordersPacks)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Find an Orders Pack, specifying its id
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

//Update attributes of the orders pack
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

//Delete the orders pack after finding it by its id
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

//Export the router so it can be used by other files 
module.exports = router