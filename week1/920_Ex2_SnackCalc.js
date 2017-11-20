// Snack Supply Calculator:
// Store your current age in a variable.
// Store a maximum age in a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total, from your current age until the maximum age.
// Log the result to the screen like this: "You will need NN to last you until the age of X".

var current_age = 10;
var max_age = 20;
var estimatePerDay = 2;

var total = (max_age - current_age) * 365 * estimatePerDay;
var line = "You will need " + total + " to last you until the age of " + max_age;
console.log(line);
