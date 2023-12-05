function readTemp(input) {
  try {
    const str = input.split(' ');
    return str[20].slice(2) / 1000.0;
  } catch (err) {
    console.log('tried to slice a string', err);
    console.log('input', input);
  }
  const str = input.split(' ');
  return str[20].slice(2) / 1000.0;
}

module.exports = readTemp;
