'use strict'

/* eslint-env mocha */
const reQuire = require('.')
const join = require('path').join
const snapshot = require('snap-shot-it')

describe('re-quire', () => {
  it('loads several things', () => {
    const loadSrc = reQuire(join(__dirname, '..', 'test', 'src'))
    const { foo, bar } = loadSrc({
      foo: './foo',
      bar: './subfolder/bar'
    })
    snapshot({ foo, bar })
  })
})
