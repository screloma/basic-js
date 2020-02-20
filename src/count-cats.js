module.exports = function countCats(matrix) {
  const reducer = (acc, value) => {
    return acc + (value == '^^' ? 1 : 0);
  };
  return matrix.reduce((acc, value) => {
    return acc + value.reduce(reducer, 0);
  }, 0);
};
