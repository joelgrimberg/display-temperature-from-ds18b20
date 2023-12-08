import express from 'express'
import sensor from 'ds18x20'

const router = express.Router()

router.get('/', (req, res) => {
    const tmp = sensor.get(process.env.DS18B20_SENSOR)
    res.send({ tmp })
})

export default router
