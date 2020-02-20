module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let res = arr.reduce((acc, value) => {
      if (Array.isArray(value)) {
        return Math.max(acc, this.calculateDepth(value, depth + 1));
      } else {
        return acc;
      }
    }, depth);
    return res;
  }
};
