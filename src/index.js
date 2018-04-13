'use strict'

const join = require('path').join
const load = base => options => {
  const result = {}
  Object.keys(options).forEach(name => {
    result[name] = require(join(base, options[name]))
  })
  return result
}

module.exports = load
