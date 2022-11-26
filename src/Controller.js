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
    console.log(result);
  },
};

module.exports = Controller;
