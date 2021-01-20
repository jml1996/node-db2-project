const express = require('express')
const db = require('../../data/db-config.js')
const Car = require('./cars-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Car.get()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Car.create(req.body)
        .then(cars => {
            res.status(201).json(cars)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    const env = process.env.NODE_ENV || 'development';
    const message = env === 'development' ? err.message : 'something bad happened';
    res.status(500).json(message);
})

module.exports = router