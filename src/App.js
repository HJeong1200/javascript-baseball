const Controller = require("./Controller");

class App {
  play() {
    Controller.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
