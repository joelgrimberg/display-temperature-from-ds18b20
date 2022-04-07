const readTemp = require('./readTemp.js')
const loadFixture = require('./loadFixture.js')

const fdr = loadFixture('temp.txt')

test('returns temp', () => {
  expect(readTemp(fdr)).toBe(18.725)
})
