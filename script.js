// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];
let maxAmount = 5;
let word;
//functie 1
const wordpicker = function(list) {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  alert (x[index]);
  return x[index];
};
// const PicksRandomWord = () => {
//     let index = Math.floor(Math.random() * wordList.length);
//     const chosenRandomWord = list[index];
//     return chosenRandomWord;
//   };
let inputs;
const wordGuessed = function(word, inputs) {
  let remaining = word.filter(function(letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};
const clean = function() {
  document.querySelector("input").value = "";
};
let gameOver;
const winTheGame = function() {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};
const lose4 = function() {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};
const spanTheWord1 = function(word) {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};
let tries = 0;
const updateTriesDisplay = function(tries) {
  document.querySelector(".lives span").innerHTML = 5 - tries;
};
const letters = function(word, inputs) {
  let wrongLetters = inputs.filter(function(letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};
const theWord = function(word, inputLetterWords) {
  let display = word.map(function(letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};
const guessLetter = function() {

  if (gameOver) {
    return;
  }
  const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";
//   const CheckWordForLetter = (word, letter) => {
//     return word.includes(letter);
//     };
  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  if (!word.includes(input1)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }
//   const addsAmountofAttemps = (attempts) => {
//     attempts++;
//     return attempts;
//     };

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);
//   const UpdateListOfGuesses = (guessedLetters, letter) => {
//     guessedLetters.push(letter);
//     return guessedLetters;

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    lose4();
  }
//   const checksIfGameOver = (attempts) => {
//     if (attempts <= 4) {
//         return false;
//     } else {
//         return true;
//     }
//     };
// const checksIfGameIsWon = (PicksRandomWord) => {
//     if (PicksRandomWord === "") {
//       return true;
//     } else {
//       return false;
//     }
// };
};

function beginTheGameWithPlayer() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordpicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});