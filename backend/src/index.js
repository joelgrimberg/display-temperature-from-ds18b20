import express from 'express'
import 'dotenv/config'
import getTemperature from './routes/gettemperature.js'

const app = express()
const port = process.env.PORT

app.use('/', getTemperature)

app.listen(port, () => {
    console.log(`Temp api listening on port ${port}`)
})
