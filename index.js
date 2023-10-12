// Started psuedocoding various functions that might be needed for this game to run. 
// TODO: Finish planning out and psuedo coding, begin coding and testing game. Test OpenAI API first.  
// TODO: Decide on a framework to use for the game. Vanilla JS, Alpine.js,  or React.js? Or something else? Astro? Phaser?



let score = 0;
let level = 1;
let speed = 1;
let wordsPerLevel = 5;
let wordList = [];
let userInput = "";

function generateWordList(wordsPerLevel) {
  // chat gpt to generate words based on the number of words per level
}

function startGame() {}

function wordFall() {
  const word = wordList.pop();
  // To generate a random horizontal position for the word
  const x = Math.random() * 100;
  // Make the word drop down the screen
}

function missedWord() {
  // If the word reaches the bottom of the screen without being typed lose a life
}

function gameOver() {
  // If the player loses three lives end the game
}

function checkUserInput() {
  // Check if the user input matches the word
  // If it does, remove the word from the screen
}

function updateScore() {
  // If the users input matches the word
  score++;
}

function levelUp() {
  level++;
  speed += 100;
  wordsPerLevel += 5;
}

document.addEventListener("keydown", function (event) {
  userInput += event.key;
});
