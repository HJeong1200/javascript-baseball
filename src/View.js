const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");

const View = {
  printStart() {
    Console.print(Message.START);
  },

  printAnswerPrompt(errorCallback, callback) {
    Console.readLine(Message.ANSWERPROMPT, (input) => {
      errorCallback(input);
      callback(input);
    });
  },
};

module.exports = View;
