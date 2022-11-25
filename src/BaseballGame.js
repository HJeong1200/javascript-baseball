const { Random } = require("@woowacourse/mission-utils");

class BaseballGame {
  #answer;

  constructor() {
    this.#answer = this.createAnswer();
  }

  createAnswer() {
    const answer = [];

    while (answer.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }

    return answer;
  }

  getAnswer() {
    return this.#answer;
  }
}

module.exports = BaseballGame;
