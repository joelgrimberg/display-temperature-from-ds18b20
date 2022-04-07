import file from '../../public/temp.txt'
import { readTemp } from '../utils/readtemp'

var x = readTemp(file)

const Index = () => (
  <div>
    <h1>🌡️ {x} 🌡️</h1>
    <h2></h2>
  </div>
)

export default Index
