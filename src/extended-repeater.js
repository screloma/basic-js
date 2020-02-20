module.exports = function repeater(str, options) {
  const ownOptions = {
    repeatTimes: options.repeatTimes || 0,
    separator:
      options.separator !== undefined ? String(options.separator) : '+',
    addition: options.addition !== undefined ? String(options.addition) : '',
    additionRepeatTimes: options.additionRepeatTimes
      ? options.additionRepeatTimes
      : 1,
    additionSeparator:
      options.additionSeparator !== undefined
        ? String(options.additionSeparator)
        : '|'
  };
  result = '';

  let i = ownOptions.repeatTimes;
  i = 0;
  do {
    result += str;
    for (let j = 0; j < ownOptions.additionRepeatTimes; ++j) {
      result += ownOptions.addition;
      if (j < ownOptions.additionRepeatTimes - 1) {
        result += ownOptions.additionSeparator;
      }
    }
    if (i < ownOptions.repeatTimes - 1) {
      result += ownOptions.separator;
    }
    i++;
  } while (i < ownOptions.repeatTimes);
  return result;
};
