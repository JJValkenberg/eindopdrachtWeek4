const {
  PicksRandomWord,
  CheckWordForLetter,
  addsAmountofAttemps,
  UpdateListOfGuesses,
  checksIfGameOver,
  checksIfGameIsWon,
} = require("./script");

///TRY OUT TO SEE IF TESTING WORKS - KAN WEG
// test("testGeneral", () => {
//   expect(testFunction.add(2, 2)).toBe(4);
// });

// 1. starten van de game d.m.v. het kiezen van het woord // functienaam:PicksRandomWord
describe("PicksRandomWord", () => {
  test("If a random word is chosen so that the game can start, not to be Null", () => {
    const input = ["vis", "toeter", "developer", "telefoon"];
    const output = PicksRandomWord(input);
    console.log("is het random?", output);
    expect(PicksRandomWord(output)).not.toBe(null);
  });
});

// 2. checken of een letter voorkomt in het woord
describe("CheckWordForLetter", () => {
  test("if the letter in the word", () => {
    const word = "test";
    expect(CheckWordForLetter(word, "e")).toBe(true);
  });
  test("if the letter isn't in the word", () => {
    const word = "test";
    expect(CheckWordForLetter(word, "o")).toBe(false);
  });
});

// 3. updaten van het aantal pogingen van de gebruiker
describe("addsAmountofAttemps", () => {
  test("if the amount of attempts adds up", () => {
    const attempts = 3;
    expect(addsAmountofAttemps(attempts)).toBe(4);
  });
  test("if the amount of attempts adds up", () => {
    const attempts = 3;
    expect(addsAmountofAttemps(attempts)).not.toBe(3);
  });
});

// 4. updaten van de lijst met letters die al geraden zijn door de gebruiker
describe("UpdateListOfGuesses", () => {
  test("If the list of guesses updates with the new guessed letter", () => {
    const letter = "a";
    const guessedLetters = ["e", "t", "r"];
    expect(UpdateListOfGuesses(guessedLetters, letter)).toContain("a");
  });
  test("", () => {
    const letter = "a";
    const guessedLetters = ["e", "t", "r"];
    expect(UpdateListOfGuesses(guessedLetters, letter)).not.toContain("b");
  });
});

// 5. verliezen van de game wanneer er geen pogingen meer over zijn
describe("checksIfGameOver", () => {
  test("if the amount of attempts variable is <=4", () => {
    const attempts = 4;
    expect(checksIfGameOver(attempts)).toBe(false);
  });
  test("if the amount of attempts variable is <=4", () => {
    const attempts = 5;
    expect(checksIfGameOver(attempts)).toBe(true);
  });
});

// 6. winnen van de game
describe("checksIfGameIsWon", () => {
  test("", () => {
    // const word = "boek";
    const gameIsWon = "";
    expect(checksIfGameIsWon(gameIsWon)).toBe(true);
  });
});

// Te testen functionaliteiten
// 1. starten van de game d.m.v. het kiezen van het woord DONE
// 2. checken of een letter voorkomt in het woord   DONE
// 3. updaten van het aantal pogingen van de gebruiker DONE
// 4. updaten van de lijst met letters die al geraden zijn door de gebruiker DONE
// 5. verliezen van de game wanneer er geen pogingen meer over zijn DONE
// 6. winnen van de game
