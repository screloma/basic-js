module.exports = function getSeason(date) {
  console.log(date);
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  date.getUTCDate();
  let month = date.getMonth();
  console.log(month);
  switch (true) {
    case month == 11 || month == 0 || month == 1: {
      return 'winter';
    }
    case month >= 2 && month <= 4: {
      return 'spring';
    }
    case month >= 5 && month <= 7: {
      return 'summer';
    }
    case month >= 8 && month <= 10: {
      return 'fall';
    }
  }
};
