const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");

const View = {
  printStart() {
    Console.print(Message.START);
  },

  printAnswerPrompt(errorCallback, baseballGame) {
    Console.readLine(Message.ANSWERPROMPT, (input) => {
      errorCallback(input);
      baseballGame.checkAnswer(input);
    });
  },
};

module.exports = View;
