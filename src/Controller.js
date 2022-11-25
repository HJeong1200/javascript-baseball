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
    View.printAnswerPrompt(Errors.validAnswerCheck, baseballGame);
  },
};

module.exports = Controller;
