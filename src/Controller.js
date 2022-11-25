const View = require("./View");
const BaseballGame = require("./BaseballGame");

const Controller = {
  startGame() {
    View.printStart();
    const baseballGame = new BaseballGame();
  },
};

module.exports = Controller;
