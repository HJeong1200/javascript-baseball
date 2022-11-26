const View = require("./View");
const BaseballGame = require("./BaseballGame");
const Errors = require("./Error");
const { Console } = require("@woowacourse/mission-utils");

const Controller = {
  startGame() {
    const baseballGame = new BaseballGame();
    this.checkAnswer(baseballGame);
  },

  checkAnswer(baseballGame) {
    return View.printAnswerPrompt((input) => {
      Errors.validAnswerCheck(input);
      const result = baseballGame.checkAnswer(input);
      this.checkResult(baseballGame, result);
    });
  },

  checkResult(baseballGame, result) {
    const { strike, ball } = result;

    if (strike === 3) {
      View.printResult({ strike, ball });
      this.checkRestart();
    } else {
      View.printResult({ strike, ball });
      this.checkAnswer(baseballGame);
    }
  },

  checkRestart() {
    View.printSuccess((input) => {
      Errors.validRestartCheck(input);
      if (input === "1") return this.startGame();
      return Console.close();
    });
  },
};

module.exports = Controller;
