var unit = require('css-get-unit')

module.exports = duration

/**
 * Normalize duration value into milliseconds.
 */
function duration (time) {
  var number = parseFloat(time)
  switch (unit(time)) {
    case null:
    case 'ms': return number
    case 's': return number * 1000
    case 'm': return number * 60000
    case 'h': return number * 3600000
    case 'd': return number * 86400000
    case 'w': return number * 604800000
    default: return null
  }
}
