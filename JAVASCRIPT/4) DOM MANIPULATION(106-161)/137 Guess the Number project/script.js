// script.js
let secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let previousGuesses = [];
let gameActive = true;

const userGuessInput = document.getElementById('user-guess');
const checkButton = document.getElementById('check-btn');
const resetButton = document.getElementById('reset-btn');
const message = document.querySelector('.message');
const previousGuessesDisplay = document.getElementById('guesses');
const hint = document.getElementById('hint');

// Function to update the message
function displayMessage(msg, color = '#007bff') {
  message.textContent = msg;
  message.style.color = color;
}

// Handle Check button click
checkButton.addEventListener('click', () => {
  if (!gameActive) return;
  
  const userGuess = Number(userGuessInput.value);

  // Check if input is valid
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    displayMessage('⚠️ Please enter a valid number between 1 and 100', 'orange');
    return;
  }

  previousGuesses.push(userGuess);
  previousGuessesDisplay.textContent = previousGuesses.join(', ');

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    displayMessage('🎉 Correct! You guessed the number!', 'green');
    hint.textContent = secretNumber;
    gameActive = false;
  } else if (userGuess < secretNumber) {
    displayMessage('📉 Too low, try again!');
  } else {
    displayMessage('📈 Too high, try again!');
  }

  userGuessInput.value = '';
});

// Handle Reset button click
resetButton.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  previousGuesses = [];
  gameActive = true;
  userGuessInput.value = '';
  previousGuessesDisplay.textContent = '';
  hint.textContent = '???';
  displayMessage('Start guessing...');
});
