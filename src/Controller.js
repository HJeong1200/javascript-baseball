const View = require("./View");
const BaseballGame = require("./BaseballGame");
const Errors = require("./Error");

const Controller = {
  startGame() {
    View.printStart();
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
      View.printSuccess();
    } else {
      View.printResult({ strike, ball });
      this.checkAnswer(baseballGame);
    }
  },
};

module.exports = Controller;
