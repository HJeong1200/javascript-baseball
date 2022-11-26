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

  checkAnswer(input) {
    input = input.split("");
    const strike = this.checkStrike(input);
    const ball = this.checkBall(input);
    return { strike, ball };
  }

  checkStrike(input) {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      const num = Number(input[i]);

      if (num === this.#answer[i]) count++;
    }

    return count;
  }

  checkBall(input) {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      const num = Number(input[i]);

      if (this.#answer.includes(num) && this.#answer.indexOf(num) !== i)
        count++;
    }

    return count;
  }

  getAnswer() {
    return this.#answer;
  }
}

module.exports = BaseballGame;
