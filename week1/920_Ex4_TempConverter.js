// Temperature Converter:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

//Me and Sergio's Work:
// var fahrenheitTemp = 80;
// var convert2Celsius = (fahrenheitTemp - 32) / 1.8
// var outputF2C = fahrenheitTemp + "°F " + convert2Celsius + "°C is"
// console.log(outputF2C);
// var celsiusTemp = 25;
// var convert2Fahrenheit = celsiusTemp * 1.8 + 32
// var outputC2F =  celsiusTemp + "°C is " + convert2Fahrenheit + "°F";
// console.log(outputC2F);

//Teacher's Answer:
var temp_c = 21;
var temp_f = temp_c * 9 / 5 + 32;

console.log(temp_c + "°C is " + temp_f + "°F");

temp_f = 72;
temp_c = (temp_f - 32) / 1.8;

console.log(temp_f + "°F is " + temp_c + "°C");
