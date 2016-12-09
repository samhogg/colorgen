import { interpolateRainbow } from 'd3-scale'

// Compute greatest average distance between n candidates and the actual array
export function computeGreatestDistance (candidates, actual) {
  return candidates.reduce((candidateAccumulator, candidate) => {
    const distance = actual
      .map(a => Math.abs(Math.abs(candidate) - Math.abs(a)))
      .reduce((a, b) => a < b ? a : b, Infinity)

    if (distance > candidateAccumulator.distance) {
      return {
        distance: distance,
        candidate
      }
    } else {
      return candidateAccumulator
    }
  }, { distance: -Infinity, candidate: undefined }).candidate
}

export function generateRandomNumbers (n) {
  let arr = []
  for (var i = 0; i < n; i++) {
    arr.push(Math.random())
  }
  return arr
}

export default function ColorGenerator () {
  const scale = interpolateRainbow
  let array = [0.5]
  return {
    next: () => {
      const newPoint = computeGreatestDistance(generateRandomNumbers(5), array)
      array.push(newPoint)
      return {
        value: scale(newPoint),
        done: false
      }
    }
  }
}
