// Age Calculator:
// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Log them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.


var birth_year = prompt("What is your birth year?: ");
var future_year = prompt("Enter a future year: ");

console.log("If I was born in year " + birth_year + " then")
console.log("in year " + future_year + " you will be " + (future_year - birth_year));