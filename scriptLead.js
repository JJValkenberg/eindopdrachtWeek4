//Deze functies zijn 1-6 voor unit testing. Ook in script.js in comment.
//pick word functie 1
const PicksRandomWord = () => {
    let index = Math.floor(Math.random() * wordList.length);
    const chosenRandomWord = list[index];
    return chosenRandomWord;
  };
//check letter functie 2
const CheckWordForLetter = (word, letter) => {
return word.includes(letter);
};
//attempts plus functie 3
const addsAmountofAttemps = (attempts) => {
attempts++;
return attempts;
};
//update list functie 4
const UpdateListOfGuesses = (guessedLetters, letter) => {
guessedLetters.push(letter);
return guessedLetters;
};
//verliezen functie 5
const checksIfGameOver = (attempts) => {
if (attempts <= 4) {
    return false;
} else {
    return true;
}
};
//winnen functie 6
  const checksIfGameIsWon = (PicksRandomWord) => {
    if (PicksRandomWord === "") {
      return true;
    } else {
      return false;
    }
};