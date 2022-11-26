const Controller = require("./Controller");
const View = require("./View");

class App {
  play() {
    View.printStart();
    Controller.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
