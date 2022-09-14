const express = require('express')
const router = express.Router()
const Alien = require('../models/aliens')


router.get('/', async (req, res) => {
    try {
        const res1 = await Alien.find()
        res.send(res1)
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
})


router.post('/add', async (req, res) => {
    try {
        const alien = new Alien({
            name: req.body.name,
            tech: req.body.tech,
        })

        await alien.save()
        res.send("inserted")
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }


})


router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
})


module.exports = router