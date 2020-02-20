module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const moves = Math.pow(2, disksNumber) - 1;
  let res = {
    seconds: moves / (turnsSpeed / 3600),
    turns: moves
  };
  return res;
};
