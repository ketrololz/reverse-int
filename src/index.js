module.exports = function reverse (n) {

  const strArray = String(n).split('')

  if (strArray[0] === '-') {
    strArray[0] = ''
    const reversedNumber = strArray.reverse().join('')
    return reversedNumber
  } else {
    const reversedNumber = strArray.reverse().join('')
    return reversedNumber
  }
}
