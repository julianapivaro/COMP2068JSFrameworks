// Import the prompt package
const prompt = require('prompt');

// Configure prompt
prompt.start();

// Define the rules for user input
const rules = {
  properties: {
    playerChoice: {
      description: 'Choose ROCK, PAPER, or SCISSORS',
      pattern: /^(ROCK|PAPER|SCISSORS)$/i,
      message: 'Please enter ROCK, PAPER, or SCISSORS',
      required: true
    }
  }
};

// Get user input
prompt.get(rules, function (err, response) {
  if (err) {
    console.log('Error:', err.message);
    return;
  }

  // Store player choice (convert to uppercase for consistency)
  const playerChoice = response.playerChoice.toUpperCase();

  // Generate computer choice using Math.random()
  const randomValue = Math.random();
  let cpuChoice;

  if (randomValue >= 0.00 && randomValue <= 0.34) {
    cpuChoice = 'PAPER';
  } else if (randomValue >= 0.35 && randomValue <= 0.67) {
    cpuChoice = 'SCISSORS';
  } else { // 0.68 - 1.00
    cpuChoice = 'ROCK';
  }

  // Display both choices
  console.log('Player Pick:', playerChoice);
  console.log('Computer Pick:', cpuChoice);

  // Determine the winner using switch statement
  let result;

  if (playerChoice === cpuChoice) {
    result = "It's a tie";
  } else {
    switch (playerChoice) {
      case 'ROCK':
        result = (cpuChoice === 'SCISSORS') ? 'Player Wins' : 'Computer Wins';
        break;
      case 'PAPER':
        result = (cpuChoice === 'ROCK') ? 'Player Wins' : 'Computer Wins';
        break;
      case 'SCISSORS':
        result = (cpuChoice === 'PAPER') ? 'Player Wins' : 'Computer Wins';
        break;
      default:
        result = 'Invalid pick';
    }
  }

  // Display the result
  console.log('Result:', result);
});
