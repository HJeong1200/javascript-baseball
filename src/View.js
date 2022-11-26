const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");

const View = {
  printStart() {
    Console.print(Message.START);
  },

  printAnswerPrompt(callback) {
    Console.readLine(Message.ANSWERPROMPT, callback);
  },

  printResult({ strike, ball }) {
    if (strike && !ball) return Console.print(strike + Message.STRIKE);
    if (!strike && ball) return Console.print(ball + Message.BALL);
    if (!strike && !ball) return Console.print(Message.NOTHING);
    return Console.print(`${ball + Message.BALL} ${strike + Message.STRIKE}`);
  },

  printSuccess() {
    Console.print(Message.SUCCESSPROMPT);
  },
};

module.exports = View;
