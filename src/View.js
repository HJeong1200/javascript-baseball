const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");

const View = {
  printStart() {
    Console.print(Message.START);
  },

  printAnswerPrompt(callback) {
    Console.readLine(Message.ANSWERPROMPT, callback);
  },
};

module.exports = View;
