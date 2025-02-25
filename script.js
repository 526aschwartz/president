 var quotesArray = [
     'I believe that all the measures of the Government are directed to the purpose of making the rich richer and the poor poorer.  —  William Henry Harrison ',
     'Times change, and we change with them  —  William Henry Harrison',
    'There is nothing more corrupting, nothing more destructive of the noblest and finest feelings of our nature, than the exercise of unlimited power. —  William Henry Harrison',
    'The liberties of a people depend on their own constant attention to its preservation. —  William Henry Harrison'
];
var randomNumber = Math.floor(Math.random() * quotesArray.length);
document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '” — ' + quotesArray[randomNumber].split(' — ')[1];
// //console.log(quotesArray[randomNumber].split(' — ')[0]);



const timeoutTime = 180000; // Time in milliseconds (e.g., 5000 for 5 seconds)
  let timeoutId;

  function setBlackScreen() {
    document.body.style.backgroundColor = 'black';
    document.body.innerHTML = 'Was the 3 minutes and 1 second not enough time? Neither was the 31 days he was in office for.'; // Clear content
  }

  function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(setBlackScreen, timeoutTime);
  }

  // Initial timeout setup
  resetTimeout();

  // Reset timeout on user interaction (e.g., mousemove, keydown, click)
  document.addEventListener('mousemove', resetTimeout);
  document.addEventListener('keydown', resetTimeout);
  document.addEventListener('click', resetTimeout);