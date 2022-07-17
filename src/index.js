module.exports = function towelSort(matrix = []){ 
  return matrix.map((i, idx) => idx%2 ? i.reverse() : i).flat()
}
