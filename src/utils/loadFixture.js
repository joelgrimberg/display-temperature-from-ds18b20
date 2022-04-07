const fs = require('fs')
const path = require('path')

function loadFixture(filename) {
  return fs.readFileSync(
    path.join(__dirname, '../../__fixtures__', filename),
    'utf8'
  )
}

module.exports = loadFixture
