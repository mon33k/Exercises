// Github -> Fundamentals -> Conditionals
// https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/conditionals/conditionals.md

//Ex1
var num = 3
if (num > 2) {
  console.log('it\'s larger than 2')
} else {
  console.log('it\'s not large than 2')
}

//Ex2
var cat_count = 1     //Do regressing, check to see if all conditions work by putting all options to see if you get the expected output
console.assert(typeof(cat_count) === 'number', 'cat_count is not a number');
//var cat_count = += 1; //increases the count of cats by 1 
//if (cat_count === undefined){     //What if you were trying to add if undefined?    
 //   console.assert(cat_count !== undefined, "cat_count is not defined"); //this will display AssertionError message & cat_count is not defined
//}
if (cat_count ===1){
    console.log('there is a single cat')
}else if (cat_count < 1){
    console.log('no cats')
}else if (cat_count === 2){
    console.log('there are a couple of cats')
}else if (cat_count > 1){
    console.log('there are many cats')
}

//Ex3 Depending on age, it says alcohol sales is permitted, or not. 
//But no sales on Sunday
var age = 18
var day_of_week = 'SUNDAY'
day_of_week = day_of_week.toLowerCase(); //even if the var day_of_week is capitalized it will recognize it and pair with the lowercase days listed
//console.assert(typeof(age) === 'number', 'Age is not a number');
//console.assert(age !== undefined && typeof(age) == 'number', "please enter age") 
//put the above two lines together to see if it is undefined and a type of number

console.assert(day_of_week === 'monday'
                || day_of_week === 'tuesday'
                || day_of_week === 'wednesday'
                || day_of_week === 'thursday'
                || day_of_week === 'friday'
                || day_of_week === 'saturday'
                || day_of_week === 'sunday',
                "should be a day of week");
// if (day_of_week === 'Sunday'){                               //if statement for day_of_week if Sunday
//     console.log("You can't buy alcohol today")
// }else{
// }
// if (age >= 21){                                              //if statement for if age is legal or underage 
//     console.log("you are of legal age to buy alcohol" )
// }else{ 
//     console.log("you are underaged to buy alcohol")
// }

if (age < 21 || day_of_week === 'sunday') {                     //This puts the two above if statements together using the || or operator 
    console.log('sales not permitted')
 } else {
    console.log('sales are permitted')
 }

//Ex4 Count of Dogs and in case is there is none, print "Where is Luna?"
var dogCount = 0        //falsy value because it is undefined

if (!dogCount){         //using a ! changes the falsy value to true 
    console.log("Where is Luna?")
}

//Ex5 Given a day of the month (as a number)
//print out the day of the week (as a text, example: Monday)
var day_of_month = 16
console.assert(typeof(day_of_month) === 'number', 'Day has to be a number');

var day = 22; 

var remainder = day % 7; 

if (remainder === 1){
    console.log("It is Friday");
}
else if(remainder === 2){
    console.log("It is Saturday")
}
else if(remainder === 3){
    console.log("It is Sunday")
}
else if(remainder === 4){
    console.log("It is Monday")
}
else if(remainder === 5){
    console.log("It is Tuesday")
}
else if(remainder === 6){
    console.log("It is Wednesday")
}
else if(remainder === 7){
    console.log("It is Thursday")
}

//SWITCH EXAMPLE: The above example written as a switch statement for the month of September
var day = 2;
var weekday = day % 7;

switch (weekday) {
        case 1: 
        console.log('Friday');
        break;
        
        case 2: 
        console.log('Saturday');
        break;

        case 3: console.log('Sunday');
        break;
}