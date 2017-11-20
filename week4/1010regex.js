// /not/.test('The text does not have exwhyzee'); // true
// /nt/.test('The text doesnt have exwhyzee'); // true

// /not/.test('The text doesnt have exwhyzee'); // false
// /nt/.test('The text does not have exwhyzee'); // false

// // But one pattern to rule them all:
// var pattern = /no?t/

// pattern.test('The text doesnt have exwhyzee'); // true
// pattern.test('The text does not have exwhyzee'); //true

// var aDefiniteArticle = /[tT]he/;

// aDefiniteArticle.test('The text does has a few numbers. 1 exactly.');
// // -> true

// aDefiniteArticle.test('Any text can have numbers.');
// // -> false

/*Question 1:
Find the first three letter word in the text below:
I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world. */

//var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'
//var pattern = / [a-z]{5}[ .]/   //Trying to find the last word in the string.
//try to match three letters of a word, the question mark means is it there 0 or 1 times 
//var pattern = / [a-z]?[a-z][a-z] /;        //it is looking for a two letter word with spaces in between. The fist [a-z] is optional then it will go to the next one which is "looked" with no spaces in between then the next one is "up" the result will give you up  
//console.log(text.match(pattern));
//pattern.exec(text);

//var pattern = /\b\w{3}\b/; 



/*Question 2: 
Find ALL the three letter words in the text below:

I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.
*/

// var text = 'I looked up at the mass of signs and stars in the night sky and laid myself open for the first time to the benign indifference of the world.'
// var pattern = /\bw{3}\b/g;              //without the g will give you an infinite loop 
// text.match(pattern);
// //This loop finds the 
// var m;
// while(m = pattern.exec(text)){          //if you want to use g you have to use pattern.exec
//     console.log(m);
//     console.log()
// }

/*Quetion 3: 
Find the first capital letter in the text below:
txtng: the Gr8 Db8
*/

// var text = 'txtng: the Gr8 Db8'
// var pattern = /[A-Z]/                           //find me a capital letter A-Z 
// console.log(text.match(pattern))


/*Question 4: 
 Find the first number in the text below:
There are 300,000,000 Americans, give or take.      
*/

// var text ='There are 300,000,000 Americans, give or take.'

// var pattern = /[0-9]+/     //the + means one character or more 

// console.log(pattern.exec(text));

/*Question 5: 
Find the first capitalized word in the text below:
txting: the Great Debate     
*/

// var text = 'txting: the Great Debate';
// var pattern = /[A-Z][a-z]*/                 //looking for a capital letter followed by a lowercase letter that is 0 characters or more 
// console.log(text.match(pattern));

/*Question 6: 
Match on hexadecimal numbers:
This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn't.     
*/
// var text = 'This is an example of a hexadecimal number: af00cce1. So is this: AF11. A dad is hex but a mom isn\t.'
// var pattern = /\b[a-fA-F0-9]{1,}\b/g;
// console.log(text.match(pattern))


/*Question 7:
Find the first word in the text:
var text = 'This is an example.';     
*/

// var text = 'This is an example.';
// var pattern = /\w+/;
// console.log(text.match(pattern));


/*Question 8: 
Find the last word in the text:

var text = 'This is an example.';
Note that does not include the full stop. Also should work on sentences without the full stop:

var text = 'This is also an example';
*/

// var text = 'This is an example.';
// var pattern = /\w+W*$/          //everything that is a word followed by something that is not a word character and the $ means that it matches at the end of the string so following all the punctuation at the end
// console.log(text.match(pattern));


/*Question 9: 
For the following strings, write an expression that matches and captures both the full date, as well as the year of the date.

var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];
*/

// var dates = ['01/01/2000', '12/31/1999', '02/29/2017'];
// var pattern = /\d{1,2}\/\d{1,2}\/\d{2,4}/;
// //var pattern = new RegExp('\\d{1,2})/(\\d{1,2})/(\\d{2,4})');  This is another way to do it below
// for (var i = 0; i < dates.length; i++){
//     var date = dates[i];

//     console.log(date.match(pattern));       
// }

/////////////Another way to do it/////////////////
//var pattern = new RegExp('\\d{1,2})/(\\d{1,2})/(\\d{2,4})');  This is another way to do it that turns it into an object instead of just a string
// var dates = ['Somebody was born on 01/01/2000, I think.', '12/31/1999', '02/29/2017'];

// var pattern = new RegExp('((\\d{1,2})/(\\d{1,2}))/(\\d{2,4})');

// for (var i = 0; i < dates.length; i++) {
//     var date = dates[i];

//     var dateMatch = date.match(pattern);
//     console.log(dateMatch)
//     var date = new Date(dateMatch[4], dateMatch[3] - 1, dateMatch[2]);
//     date.setMonth(date.getMonth() + 6);

//     console.log(date)
// }

/*Question 10:
Find and print all tags in this simple html:

var html = '<html><head>'+
           '<title>Simple</title>'+
           '</head><body>'+
           'Nothing to see here'+
           '</body></html>';
*/
var html = '<html><head>'+
'<title>Simple</title>'+
'</head><body>'+
'Nothing to see here'+
'</body></html>';
var pattern = /.[html]+\W/g
console.log(html.match(html));

//g global takes the entire string





// //Another example 
// var string = "Won\'t find 55. This is 100,000 example..."
// var pattern = /([0-9,]+)[^0-9,]*$/;     //Show me all the numbers from 0-9 and the ^ means matches on the start of the string followed by 
// console.log(string.match(pattern))

