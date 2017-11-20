/* /Github 

var now = new Date(1993, 4 -1, 7, 12, 13, 5, 59, 999);    
//Anything you don't specify will be turned into zero 
console.log(now.toString());
//returns: Fri May 07 1993 12:00:00 GMT-0400 (EDT)

console.log(now.getFullYear())
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getDay())

now.setFullYear(now.getFullYear() - 1000) 
//set full year sets a new year, get full year gets the current year and is manipulated by the setfullyear method 

console.log(now.getTime());
// returns: -30822709614941 we have so many miliseconds away from 1970 the largest bit became 1 and when javascript see's that 30 bit is not enough it became 1 and made it negative 

var now = new Date(2004, 1, 29);    //Javascript knows about leap years so that it will account of this and log out the right date
//now.setDate(now.getDate() -7)
now.setFullYear(now.getFullYear() -1)   
console.log(now.toString());
//returns: Sat Mar 01 2003 00:00:00 GMT-0500 (EST)
//month starts from index 0 - january so september is 8 and october is 9 
var now = new Date(1992, 1, 13)
now.setDate(now.getDate() + 1000)   //1000 days after I was born 
console.log(now.toString()); 

//How many miliseconds that have passed since 2004 at midnight 
var then = new Date(2004, 1, 29);
var now = new Date();
console.log(now.getTime() - then.getTime())

//get time gets miliseconds, minus miliseconds need to convert miliseconds into hours - results how many hours since 2004 
console.log((now.getTime() - then.getTime()) / 1000 / 60 / 60); 

//Solving for how many miliseconds per hour
var msPerHour = 1000 * 60 * 60;
//1000 miliseconds in a second, 60 seconds in a minute, and 60 minutes in an hour
console.log((now.getTime() - then.getTime()) / msPerHour);
 
***/

//How many days you've been alive up till now 
// var then = new Date(1992, 0, 13);
// var now = new Date();
// var msPerDay = 1000 * 60 * 60 * 24;     //if you were going to put * 7 at the end of * 24 then it would show how many weeks since the date you're looking for
// console.log((now.getTime() - then.getTime()) / msPerDay)
//1342.6382897999338


// var start = new Date(); 
// for(var i = 0; i < 100000; i++){
//     console.log(i);

// }
// var end = new Date();
// console.log((end.getTime() - start.getTime()) / 1000)

var timestamp = Date.parse('2012-01-26T15:00:00.100Z');
var then = new Date(timestamp);

console.log(then.toString()) //Changes the date into a string instead of a number 



