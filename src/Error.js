const Errors = {
  validAnswerCheck(str) {
    if (str.length !== 3) throw new Error();
    const numSet = new Set();

    for (let num of str) {
      if (isNaN(parseInt(num))) throw new Error();
      if (parseInt(num) < 1 || parseInt(num) > 9) throw new Error();
      numSet.add(num);
    }

    if (numSet.size !== 3) throw new Error();
  },
};

module.exports = Errors;
