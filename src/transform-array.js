module.exports = function transform(arr) {
  function process(arr, options) {
    let priority = 0;
    if (!arr.some(x => /^--double.+/.test(x))) {
      priority = 1;
    }
    for (let i = 0; i < arr.length; ++i) {
      let el = arr[i];
      if (/^--discard.+/.test(el)) {
        if (priority) {
          options[el](arr, i);
          return 0;
        }
      } else if (/^--double.+/.test(el)) {
        options[el](arr, i);
        return 0;
      }
    }
    return 1; //Array intact
  }
  options = {
    '--discard-next': (arr, index) => {
      if (index < arr.length - 1) {
        arr.splice(index, 2);
      } else {
        arr.splice(index, 1);
      }
    },
    '--discard-prev': (arr, index) => {
      if (index) {
        arr.splice(index - 1, 2);
      } else {
        arr.splice(index, 1);
      }
    },
    '--double-next': (arr, index) => {
      if (index < arr.length - 1) {
        arr[index] = arr[index + 1];
      } else {
        arr.splice(index, 1);
      }
    },
    '--double-prev': (arr, index) => {
      if (index) {
        arr[index] = arr[index - 1];
      } else {
        arr.splice(index, 1);
      }
    }
  };
  let finished = false;
  while (!finished) {
    finished = process(arr, options);
  }

  return arr;
};
