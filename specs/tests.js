describe("gameGenerator()", () => {
  let game, limit;

  beforeEach(() => {
    game = gameGenerator(30);
    limit = 30;
  });

  it("should be there", () => {
    expect(gameGenerator).toBeDefined();
    expect(typeof gameGenerator).toBe("function");
  });

  it("should generate some games", () => {
    expect(typeof game).toBe("object");
  });

  it("game should have a guess method", () => {
    expect(game.guess).toBeDefined();
    expect(typeof game.guess).toBe("function");
  });

  it("game should have a numberGuesses method", () => {
    expect(game.numberGuesses).toBeDefined();
    expect(typeof game.numberGuesses).toBe("function");
  });

  it("game should have a reset method", () => {
    expect(game.reset).toBeDefined();
    expect(typeof game.reset).toBe("function");
  });

  it("game should have a giveUp method", () => {
    expect(game.giveUp).toBeDefined();
    expect(typeof game.giveUp).toBe("function");
  });

  describe("game.guess()", () => {
    it("should have just one winning number", () => {
      const number = [];
      for (let i = 0; i <= limit; i++) {
        if (game.guess(i)) number.push(i);
      }
      expect(number.length).toBe(1);
    });
  });

  describe("game.numberGuesses()", () => {
    it("should return the correct number of guesses", () => {
      game.guess(2);
      game.guess(1);
      expect(game.numberGuesses()).toBe(2);
    });
  });

  describe("game.reset()", () => {
    it("should reset the guesses", () => {
      game.guess(2);
      game.guess(1);
      game.reset();
      expect(game.numberGuesses()).toBe(0);
    });

    it("should generate a new number to guess", () => {
      let correctNumber, newNumber;
      for (let i = 0; i <= limit; i++) {
        if (game.guess(i)) correctNumber = i;
      }
      game.reset();
      const oldNumber = correctNumber;
      for (let i = 0; i <= limit; i++) {
        if (game.guess(i)) newNumber = i;
      }
      console.log(oldNumber, newNumber);
      expect(oldNumber === newNumber).toBeFalsy();
    });
  });

  describe("game.giveUp()", () => {
    it("should return the correct number", () => {
      let correctNumber;
      for (let i = 0; i <= limit; i++) {
        if (game.guess(i)) correctNumber = i;
      }
      expect(game.giveUp()).toBe(correctNumber);
    });

    it("should use the game.reset() method to reset the game", () => {
      const spy = spyOn(game, "reset");
      game.giveUp();
      expect(spy).toHaveBeenCalled();
    });
  });
});
