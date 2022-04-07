const readTemp = require('./readtemp.js')

// import tempReading from '__fixtures__ /temp1.txt'
const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, '__fixtures__', 'temp1.txt')
const fdr = fs.readFileSync(file, 'utf8', function (err, data) {
  return data
})

test('returns temp', () => {
  expect(readTemp(fdr)).toBe(18.125)
})
