// LAB03
const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res) {
  // Parse URL and extract query parameters
  const parsedURL = url.parse(req.url, true);
  const query = parsedURL.query;

  //write so it will show the result
  res.writeHead(200, { 'Content-Type': 'text/html' }); // Add this line

  // Extract parameters
  const calcMethod = query.method;
  const x = Number(query.x);
  const y = Number(query.y);

  // Validate parameters
  if (!calcMethod || isNaN(x) || isNaN(y)) {
    res.write('<h1>Oh no! Missing or invalid number choice</h1>');
    res.write('<p>Please enter your number choices in the URL using ?method=&x=&y=</p>');
    res.end();
    return;
  }

  let result;
  let symbol;
  let valid = true;

  // Determine the operation
  switch (calcMethod.toLowerCase()) {
    case 'add':
    case 'addition':
      result = x + y;
      symbol = '+';
      break;
    case 'subtract':
    case 'subtraction':
      result = x - y;
      symbol = '-';
      break;
    case 'multiply':
    case 'multiplication':
      result = x * y;
      symbol = '*';
      break;
    case 'divide':
    case 'division':
      if (y === 0) {
        res.write('<h1>Division by 0 is not allowed</h1>');
        res.end();
        return;
      }
      result = x / y;
      symbol = '/';
      break;
    default:
      valid = false;
      res.write('<h2>Invalid operation!</h2>');
      res.write('<p>Valid operations are: add, subtract, multiply, or divide.</p>');
      break;
  }

  if (valid) {
    res.write(`<h2>${x} ${symbol} ${y} = ${result}</h2>`);
  }

  res.end();
}

// Use the function 
app.use('/lab3', calculate);

// Run the server
app.listen(3000, () => {
  console.log('LAB03 server running at http://localhost:3000/lab3');
});
