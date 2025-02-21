var quotesArray = [
    'I believe that all the measures of the Government are directed to the purpose of making the rich richer and the poor poorer.  —  William Henry Harrison ',
    'Times change, and we change with them  —  William Henry Harrison',
    'There is nothing more corrupting, nothing more destructive of the noblest and finest feelings of our nature, than the exercise of unlimited power. —  William Henry Harrison',
    'The liberties of a people depend on their own constant attention to its preservation. —  William Henry Harrison'
];
var randomNumber = Math.floor(Math.random() * quotesArray.length);
document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '” — ' + quotesArray[randomNumber].split(' — ')[1];
//console.log(quotesArray[randomNumber].split(' — ')[0]);

// Get today's date
let today = new Date();
let todayDate = today.getDate();
// Select the HTML element where you want to display the date-related text
let dateTextElement = document.getElementById('press-quote');

// Conditional logic to change the text based on the date

if (todayDate === 21) {

  dateTextElement.textContent = "Happy Valentine's Day!";

} else {

  dateTextElement.textContent = "Today is the" + "/" + todayDate;
}