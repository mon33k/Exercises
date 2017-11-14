//tahe the first two arguments 
//add them and log the result use process.argv
//eg.
//>node add.js 1 2
//'the result is 3'

//to log the first argument
//from the command line
//process.argv[2]

// console.log(process.argv);

//Type in terminal node add.js 4 5 to add the parameters 
const add = (num1, num2) => num1 + num2
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
console.log(`The result is: ${add(num1, num2)}`);


