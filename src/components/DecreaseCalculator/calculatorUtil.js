export const calculateDecrease = (startCount, endCount) => {

  let start = startCount
  let end = endCount
  let decrease = start - end // 15
  let remainder = start % decrease // 5
  let totalSegments = Math.floor(start / decrease)  // 1
  let repeat1 = decrease - remainder
  let stitches1 = totalSegments - 2
  let repeat2 = remainder
  let stitches2 = totalSegments - 1
  let solution = ''

  if (end === start / 2) {
    solution = `[ k2tog ] x ${decrease}times`
  } else if (repeat1 === 1 && repeat2 > 1) {
    solution = (`[ k${stitches1}, k2tog ], [ k${stitches2}, k2tog ] x ${repeat2}times`)
  } else if (repeat1 === 0 && repeat2 > 1) {
    solution = (`[ k${stitches2}, k2tog ] x ${repeat2}times`)
  } else if (repeat1 > 1 && repeat2 === 0) {
    solution = (`[ k${stitches1}, k2tog ] x ${repeat1}times`)
  } else if (repeat1 > 1 && repeat2 === 1) {
    solution = (`[ k${stitches1}, k2tog ] x ${repeat1}times, [ k${stitches2}, k2tog ]`)
  } else if (stitches1 === 0) {
    solution = (`[ k2tog ] x ${repeat1}times, [ k${stitches2}, k2tog ]`)
  } else if (stitches2 === 0) {
    solution = (`[ k${stitches1}, k2tog ] x ${repeat1}times, [ k2tog ] x ${repeat2}times`)
  } else {
    solution = (`[ k${stitches1}, k2tog ] x ${repeat1}times, [ k${stitches2}, k2tog ] x ${repeat2}times`)
  }

  return solution
};

