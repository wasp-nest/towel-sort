
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) return []

  return matrix.map((i, index, arr) => {
      if ((index + 1) % 2 === 0) {
          return i.reverse();
      } else {
          return i;
      }
  }).reduce((acc, val) => acc.concat(val), [])
}
