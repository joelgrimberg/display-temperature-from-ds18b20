import file from './file.txt'
import { readTemp } from '../utils/readtemp'

var x = readTemp(file)
const Index = () => (
  <div>
    <h1>current temp: {x}</h1>
  </div>
)

export default Index
