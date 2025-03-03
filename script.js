// Array of quotes 
var quotesArray = [
  'I believe that all the measures of the Government are directed to the purpose of making the rich richer and the poor poorer.  —  William Henry Harrison ',
  'Times change, and we change with them  —  William Henry Harrison',
  'There is nothing more corrupting, nothing more destructive of the noblest and finest feelings of our nature, than the exercise of unlimited power. —  William Henry Harrison',
  'The liberties of a people depend on their own constant attention to its preservation. —  William Henry Harrison'
];

// Generate a random index to pick a quote from the array
var randomNumber = Math.floor(Math.random() * quotesArray.length);

// Select the quote and format it properly before displaying it in the HTML element with ID 'press-quote'
document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '” — ' + quotesArray[randomNumber].split(' — ')[1];


// Timeout duration set to 90,000 milliseconds (90 seconds)
const timeoutTime = 90000;
let timeoutId;

// Function to change the screen to black with a message after timeout
function setBlackScreen() {
  console.log("Timeout executed! Black screen should appear now.");
  
  // Apply styling to make the screen black with white text
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.height = '100vh';
  document.body.style.textAlign = 'center';
  document.body.style.fontSize = '24px';
  document.body.style.padding = '20px';

  // Display a message 
  document.body.innerHTML = 'Was the 3 minutes and 1 second not enough time? Neither was the 31 days he was in office for.';
}

// Function to reset the timeout when user interacts with the page
function resetTimeout() {
  clearTimeout(timeoutId); // Clear the existing timeout
  console.log("Timeout reset. Black screen in 90s if no interaction.");
  timeoutId = setTimeout(setBlackScreen, timeoutTime); // Restart the timer
}

// Initial timeout setup when the script runs
resetTimeout();

// Reset timeout when user moves the mouse, presses a key, or clicks
document.addEventListener('mousemove', resetTimeout);
document.addEventListener('keydown', resetTimeout);
document.addEventListener('click', resetTimeout);