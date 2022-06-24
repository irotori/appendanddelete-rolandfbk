const appendAndDelete = require('./appendAndDelete.js')
const assert = require('assert')

describe('Tests', function () {
  it('Function should return an array', function () {
    assert(appendAndDelete('hackerhappy', 'hackerrank', 9) == 'Yes')
  })
  it('Function should return an array', function () {
    assert(appendAndDelete('aba', 'aba', 7) == 'Yes')
  })
  it('Function should return an array', function () {
    assert(appendAndDelete('ashley', 'ash', 2) == 'No')
  })
  it('Function should return an array', function () {
    assert(appendAndDelete('qwerasdf', 'qwerbsdf', 6) == 'No')
  })
})
