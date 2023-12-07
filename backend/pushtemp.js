import { InfluxDB, Point } from '@influxdata/influxdb-client'
import sensor from 'ds18x20'
import 'dotenv/config'

const token = process.env.INFLUX_TOKEN
const url = process.env.INFLUX_URL
const client = new InfluxDB({ url, token })

let writeClient = client.getWriteApi(
    process.env.INFLUX_ORG,
    process.env.INFLUX_BUCKET,
    'ns'
)

const pushTemperature = () => {
    var temperature = sensor.get(process.env.DS18B20_SENSOR)

    let point = new Point('temperatuur')
        .tag('tagname1', 'tagvalue1')
        .floatField('temperature', temperature)

    console.log('writing temperature to Influx: ', temperature)

    writeClient.writePoint(point)
    writeClient.flush()
}

setInterval(pushTemperature, 10_000)
