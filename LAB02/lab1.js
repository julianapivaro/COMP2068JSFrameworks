// Import the prompt package
const prompt = require('prompt');

// Configure prompt
prompt.start();

// Define the rules for user input
const rules = {
  properties: {
    userSelection: {
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

  // Store user choice (convert to uppercase for consistency)
  const userSelection = response.userSelection.toUpperCase();

  // Generate computer choice using Math.random()
  const rand = Math.random();
  let computerSelection;

  if (rand <= 0.33) {
    computerSelection = 'ROCK';
  } else if (rand <= 0.66) {
    computerSelection = 'PAPER';
  } else {
    computerSelection = 'SCISSORS';
  }

  // Display both choices
  console.log('User Pick:', userSelection);
  console.log('Computer Pick:', computerSelection);

  // Determine the winner
  let result;

  if (userSelection === computerSelection) {
    result = "It's a tie";
  } else {
    switch (userSelection) {
      case 'ROCK':
        result = (computerSelection === 'SCISSORS') ? 'User Wins' : 'Computer Wins';
        break;
      case 'PAPER':
        result = (computerSelection === 'ROCK') ? 'User Wins' : 'Computer Wins';
        break;
      case 'SCISSORS':
        result = (computerSelection === 'PAPER') ? 'User Wins' : 'Computer Wins';
        break;
      default:
        result = 'Invalid choice';
    }
  }

  // Display the result
  console.log('Result:', result);
});
