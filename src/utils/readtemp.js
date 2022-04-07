function readTemp(input) {
  const str = input.split(' ')
  return str[20].slice(2) / 1000.0
}

module.exports = readTemp
