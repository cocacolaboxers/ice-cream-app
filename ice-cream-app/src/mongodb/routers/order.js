//.js file that manages Orders outer. Here is provided the logic to
//perform the create, find, edit, list all orders and delete operations on Orders
// in the database.

const express = require('express')
const router = new express.Router()
const Order = require('../models/order')

//Create order
router.post('/orders', (req,res) => {
    const order = new Order(req.body)

    order.save().then(() => {
        res.send(order)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

//Retrieve all orders
router.get('/orders', (req,res) => {
    Order.find({}).then((orders) => {
        res.send(orders)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Find a single order using its ID
router.get('/orders/:id', (req,res) => {
    const _id = req.params.id
    Order.findById(_id).then((order) => {
        if(!order){
            return res.status(404).send()
        }
        res.send(order)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Update fields in the order document
router.patch('/orders/:id', async (req,res) => {
    try{
        const order = await Order.findByIdAndUpdate(req.params.id, 
            req.body, {new: true, runValidators: true})
        
        if(!order){
            return res.status(404).send()
        }

        res.send(order)
    } catch(e) {
    res.status(500).send(e)
}
})

//Delete order
router.delete('/orders/:id', (req,res) => {
    const _id = req.params.id
    Order.findByIdAndDelete(_id).then((order) => {
        if(!order){
            return res.status(404).send()
        }
        res.send(order)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//Export the router so it can be used by other files
module.exports = router
