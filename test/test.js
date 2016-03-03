/* global describe it */
import ColorGenerator from '../src/index'
import assert from 'assert'
describe('Generate colors', function () {
  it('Generates 50 colors without having a collision', function () {
    const gen = ColorGenerator()
    const set = new Set()
    for (let i = 0; i < 50; i++) {
      const next = gen.next()
      set.add(next.value)
    }
    assert.equal(set.size, 50)
  })

  it('Colors are returned in RGB format', function () {
    const gen = ColorGenerator()
    const value = gen.next().value
    assert(value.indexOf('rgb') >= 0)
  })
})
