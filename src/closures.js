/* exported gameGenerator accountGenerator randomInteger */

function randomInteger(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

function gameGenerator(limit) {
  let numberToGuess = randomInteger(limit);
  let guesses = 0;

  return {
    guess(guessNumber) {
      guesses++;
      return guessNumber === numberToGuess ? true : false;
    },

    reset() {
      guesses = 0;
      const oldNumber = numberToGuess;
      while (oldNumber === numberToGuess) {
        numberToGuess = randomInteger(limit);
      }
    },

    giveUp() {
      const result = numberToGuess;
      this.reset();
      return result;
    },

    numberGuesses() {
      return guesses;
    },
  };
}
