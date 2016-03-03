const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const GOLDEN_ANGLE = (4 - 2 * GOLDEN_RATIO) * Math.PI

import d3Scale from 'd3-scale'

export default function * ColorGenerator () {
  let i = 0
  const scale = d3Scale.scaleWarm()
  while (true) yield scale(Math.abs(Math.sin(GOLDEN_ANGLE * ++i)))
}
