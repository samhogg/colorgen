/* global describe it */
import { computeGreatestDistance } from '../src/index'
import assert from 'assert'

describe('Compute greatest distance', function () {
  it('Computes the candidate with the greatest distance between given arrays', function () {
    assert.equal(computeGreatestDistance(
      [1, 2, 3, 4],
      [10, 100]
    ), 1)
  })

  it('Does not depend on the order of the candidate array', function () {
    assert.equal(computeGreatestDistance(
      [100, 2, 3, 4],
      [10, 100]
    ), 2)
  })

  it('Does not depend on the order of the actual array', function () {
    assert.equal(computeGreatestDistance(
      [100, 2, 3, 4],
      [10000, 1000, 100]
    ), 2)
  })

  it('Throw some decimals in for fun', function () {
    assert.equal(computeGreatestDistance(
      [0.100, 0.2, 0.3, 0.4],
      [0.120000, 0.13000, 0.1400]
    ), 0.4)
  })

  it('Throw some negative values in for fun', function () {
    assert.equal(computeGreatestDistance(
      [-0.100, -0.2, -0.3, -0.4],
      [-0.120000, -0.13000, -0.1400]
    ), -0.4)
  })

  it('Expect a number in the middle of the array', function () {
    assert.equal(computeGreatestDistance(
      [25, 30, 54, 50],
      [10, 100, 1000]
    ), 54)
  })

  it('Expect a number in the middle of the array', function () {
    assert.equal(computeGreatestDistance(
      [30, 40],
      [10, 20, 100]
    ), 40)
  })

  it('Works with a single actual array', function () {
    assert.equal(computeGreatestDistance(
      [30, 40],
      [10]
    ), 40)
  })

  it('Expect a number in the middle of the array', function () {
    assert.equal(computeGreatestDistance(
      [30, 40, 50],
      [10, 20, 100]
    ), 50)
  })

  it('The actual array could be empty, just throw the first number out there', function () {
    assert.equal(computeGreatestDistance(
      [30, 40, 50],
      []
    ), 30)
  })
})
