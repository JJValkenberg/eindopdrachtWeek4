const {
  PicksRandomWord,
  CheckWordForLetter,
  addsAmountofAttemps,
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

// Te testen functionaliteiten
// 1. starten van de game d.m.v. het kiezen van het woord DONE
// 2. checken of een letter voorkomt in het woord   DONE
// 3. updaten van het aantal pogingen van de gebruiker
// 4. updaten van de lijst met letters die al geraden zijn door de gebruiker
// 5. verliezen van de game wanneer er geen pogingen meer over zijn
// 6. winnen van de game
