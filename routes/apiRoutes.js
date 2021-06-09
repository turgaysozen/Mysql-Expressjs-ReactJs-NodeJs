const express = require('express')
const router = express.Router()
const db = require('../models')

// get all subscriptions
router.get('/subscriptions', async (req, res) => {
    try {
        const allSubscriptions = await db.subscription.findAll()
        res.status(200).send(allSubscriptions)
    } catch (error) {
        res.status(500).send({ "message": "Sunucu hatası. Lütfen tekrar deneyin." })
    }
})

// get single subscription
router.get('/getCustomerInfo/:phoneNumber', async (req, res) => {
    try {
        const phoneNumber = req.params.phoneNumber
        const allSubscriptions = await db.subscription.findAll({ where: { phoneNumber: phoneNumber } })
        if (allSubscriptions.length > 0) res.status(200).send(allSubscriptions)
        else res.status(403).send({ "message": "Belirtilen telefona ait kayıt bulunamamıştır." })
    } catch (error) {
        res.status(500).send({ "message": "Sunucu hatası. Lütfen tekrar deneyin." })
    }
})

// get all orders
router.get('/orders', async (req, res) => {
    try {
        const allOrders = await db.order.findAll()
        res.status(200).send(allOrders)
    } catch (error) {
        res.status(500).send({ "message": "Sunucu hatası. Lütfen tekrar deneyin." })
    }
})

// get single order
router.get('/getSubscriptionOrders/:subscriptionId', async (req, res) => {
    try {
        const subscriptionId = req.params.subscriptionId
        const allOrders = await db.order.findAll({ where: { subscriptionId: subscriptionId } })
        if (allOrders.length > 0) res.status(200).send(allOrders)
        else res.status(403).send({ "message": "Belirtilen telefona ait kayıt bulunamamıştır." })
    } catch (error) {
        res.status(500).send({ "message": "Sunucu hatası. Lütfen tekrar deneyin." })
    }
})

module.exports = router