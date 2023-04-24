// Create a new instance of URLSearchParams object using the current window's URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the value of the 'mode' parameter from the query string
const mode = urlParams.get('mode');

// Debug: Print the value of the 'mode' parameter to the console
console.log(`mode: ${mode}`);

// Check if the value of 'mode' is equal to 'ai'
if (mode === 'ai') {

  // Debug: Print a message to the console indicating the user will be redirected to the 'try-again.html' page
  console.log('User will be redirected to the "try-again.html" page');

  // Redirect the user to the 'try-again.html' page
  window.location.href = 'try-again.html';

} 
// Check if the value of 'mode' is equal to '2p'
else if (mode === '2p') {

  // Debug: Print a message to the console indicating a new game of Tic Tac Toe will be started
  console.log('Starting a new game of Tic Tac Toe');

  // Create a new instance of TicTacToe game
  new TicTacToe();

} 
// If the value of 'mode' is anything else, redirect the user to the 'start.html' page
else {

  // Debug: Print a message to the console indicating the user will be redirected to the 'start.html' page
  console.log('User will be redirected to the "start.html" page');

  // Redirect the user to the 'start.html' page
  window.location.href = 'start.html';

}
