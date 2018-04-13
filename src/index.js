'use strict'

const join = require('path').join
const load = base => (...paths) => {
  const modules = paths
    .map(aPath => join(base, aPath))
    .map(aPath => require(aPath))
  return modules
}

module.exports = load
