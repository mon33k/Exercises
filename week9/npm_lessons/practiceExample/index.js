
//Using chalk
const chalk = require('chalk');
const figlet = require('figlet');
// console.log(chalk.blue('Hello world!'));


// figlet('Hello World!!', function(err, data) {
//    if (err) {
//        console.log('Something went wrong...');
//        console.dir(err);
//        return;
//    }
//    console.log(chalk.yellow.bgBlue.bold(data));
// });

let figText;

figlet('Hello World', {
    font: 'calgphy',
    horizontalLayout: 'full',    //you can also type in full so that it is wider
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.yellow.bgBlue.bold(data));
});

