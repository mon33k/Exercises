/* Github -> Fundamentals -> Strings\
https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/strings/strings.md
*/

//Ex1
// var txt = 'Hello Monday ☻';
// for(var i = 0; i <= txt.length - 1; i++){   //if you are using <= the equals to gives you undefined because it starts at 0 as an array, 
//     console.log(txt[i]);                    //continued from top---if you add a - 1 it takes out the undefined that would be 0 
// }

// //Ex2
// var firstName = 'Bat';
// var lastName = 'Man';

// function fullName(firstName, lastName){
//     return firstName + ' ' + lastName;
// }
// console.log(fullName(firstName, lastName));

// //Ex2 Variation
// var firstName = 'Bat';
// var lastName = 'Man';

// var fullName = firstName;
// fullName += ' ';                //+= 
// fullName += lastName;

// console.log(fullName);

// //Ex3 
// var str = ' '
// var num = 5 
// for (var i = 1; i < num; i++){   
//     str += i + ', '

// }
// str += i                    //This eliminates the last comma after 5 to show a list. 
// console.log(str)        

// //Ex4
// var str = ' '
// var num = 10
// for (var i = 1; i <= num; i++){   //If you remove the = in the <= then it won't print out 10 
//     str += i
//     if (i < num){             
//         str += ', ';
//     }

// }                //This eliminates the last comma after 5 to show a list. 
// console.log(str)        

//Ex5 
// var str = ' '
// var num = 5
// for (var i = 1; i < num; i++){
//     str += i + ', ';   
//     console.log(str);
// }
       
// str += num;
// console.log(str)

// var str = ''
// var num = 10

// //Ex6 This example shows a list from one to ten in the y axis and lists the rest of the numbers for each decending 
// for (var i = 1; i <= num; i++) {
//     if (i > 1) {
//         str += ', '
//     }
//     str += i;
//     console.log(i + ' ' + str);
// }

//Ex7 This example uses two for loops and a function with two different variables list and str that joins them together with a function
// var list;
// var num = 7

// function joinList(n) {
//     str = ''
//     for (var j = 1; j <= n; j++) {
//         if (j > 1) {
//             str += ', '
//         }
//         str += j;
//     }   
//     return str; 
// }

// for (var i = 1; i <= num; i += 2) {
//     list = joinList(i);
//     console.log(i + ' ' + list);
// }

//Ex8 Prints out a list from the Y axis and decending from the X axis with BLAST OFF at the end of each list horizontally
// var list;
// var num = 7

// function joinList(n) {                  
//     str = ''
//     for (var j = n; j >= 1; j--) {              //The parameter in the above function n is put into the for loop initialization 
//         if (j > 0) {
//             str += ', '
//         }
//         str += j;
//     }   
//     return str + " BLAST OFF"; 
// }

// for (var i = 1; i <= num; i +=3) {
//     list = joinList(i);                         //The i is moved into the function above replacing n 
//     console.log(i + ' ' + list);
// }

/* How to change the length of a string */

//Ex9
//var name = "Andre"

// console.log(name[name.length%3]);

//Ex10
// var name = "Andre"

// console.log(name[name.length -1]);

//Ex11
// var name = "Andrei"

// console.log(name[Math.floor(name.length /2)]);

/* How to find the middle part of a name */

// var name = "Andrew"
// if(name.length % 2 === 1){
//     console.log(name[Math.ceil(name.length / 2)]);          //If there is a number get the middle part
// }else{                                                      //Else get the half or 1 more or less to the middle 
//     console.log(name.substring(         
//         name.length / 2 - 1,                
//         name.length / 2 + 1
//     ));
// }

/* How to change a Number to a String */
// var str = 'My favorite number is: '
// var num = 42
// var sentence = str + num
// console.log(sentence)
// console.log(typeof(sentence))

/* How to make changes in upper or lower case in a string */

//Ex1 name = "Peter"
// var name = "peter"
// console.log(name[0].toUpperCase() + name.slice(1))

//Ex2 name = "PETER"
// var name = "PETER"
// console.log(name[0].toUpperCase() + name.slice(1).toLowerCase()) //.slice(Index.length) from the index 1 'ETER' will be made sliced and made lowercased

//Ex3 name = "PeTEr"
// var name = "PeTEr"
// console.log(name[0].toUpperCase() + name.slice(1).toLowerCase())


