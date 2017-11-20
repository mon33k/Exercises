// //Github: https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/objects/objects.md

// //Example 1: Apples
// //"c4q"[1] ==> "4"
// //[1,2,3][2] ==> 3

// // var o = {quantity: 56, name:'Gala'};

// // var apples = [
// //     {quantity: 56, name: 'Gala'},
// //     {quantity: 99, name: 'Granny Smith'},
// //     {quantity: 1, name: 'Pink Delicious'}
// // ];

// // var otherApples = [
// //     {quantity: 1, name:'Gala'},
// // ];
// // function howManyApples(a1, a2, a3){
// //     var total = 0;
// //     for (var i = 0; i < a.length; i++){
// //         total += apples[i].quantity;
// //     }
// //     return total;
// // }
// // console.log('Number of apples:', howManyApples(apples))
// // console.log(o['quantity']);     //uses curly braces like we're used to using
// // console.log(o.quantity);        //Another way uses dot notation instead of curly brackets
// // console.log(o.name)

// //Example 2: Rooms 
// var rooms = [
//     {
//         price: 200,
//         location: '11 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities:[]
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities:['pool', 'valet', 'butler', 'Dog whisperer']
//     }
// ];

// function padTo(str,len){    //padTo in this function makes the string exactly as long as length or len 
//     if (str.length > len){
//         return str.slice(0, len -3) + '...' //uese elipses to show that information got cut 
//     }else if (str.length === len){
//         return str
//     }else{
//             // var spaceNeeded = len - str.length;                  //One way to do it
//             // for (var i = 0; i < spaceNeeded; i++){
//             //     str += ' ';
//             // }
//             while(str.length < len){                                //Another way to do it with a while loop
//                 str += ' ' 
//             }
//         return str;   
//     }
// }

// function padLeft(str,len){    //padLeft in this function makes the  
//     var money = str
//     if (money.length > len){
//         return money.slice(0, len -3) + '...' //uese elipses to show that information got cut 
//     }else{
//             while(money.length < len){                                
//             }
//         return money;   
//     }
// }

// function whatsAvailable(rooms){
//     for (var i = 0; i <rooms.length; i++){
//         console.log(
//             padTo(rooms[i].location, 14),   //pad to (any string, length)
//             ' ', 
//             padLeft(rooms[i].price.toString(), 8)
//         );
//     }
// }
// whatsAvailable(rooms);
// var selected = 2;
// showDetails(rooms[selected]);

// /////COMPLETE CODE THAT WAS UPLOADED VIA SLACK COS ABOVE CODE IS MISSING FUNCTIONS BUT HAS MY COMMENTS/////////////////////////////
// var rooms = [
//     {
//         price: 200,
//         location: '11 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities: []
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
//     }
// ];

// // make the string exactly as long as len
// function padTo(str, len) {
//     if (str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else {
//         while (str.length < len) {
//             str += ' '
//         }
//         return str;
//     }
// }

// // make the string exactly as long as len
// function padLeft(str, len) {
//     var money = str
//     if (money.length > len) {
//         return money.slice(0, len - 3) + '...'
//     } else {
//         while (money.length < len) {
//             money = ' ' + money
//         }
//         return money;
//     }
// }

// function toMoney(num) {
//     return '$' + num.toString()
// }

// function whatsAvailable(rooms) {
//     for (var i = 0; i < rooms.length; i++) {
//         if (rooms[i].reserved) {
//             continue;
//         }
//         console.log(
//             padTo(rooms[i].location, 20), 
//             ' ', 
//             padLeft(toMoney(rooms[i].price), 8)
//         );
//     }
// }

// function bulletPoints(list) {
//     return '\n - ' + list.join('\n - ')
// }

// function showDetails(room) {
//     console.log('Location:', room.location)
//     console.log('Price:', toMoney(room.price))
//     console.log('Max. Occupancy:', room.maxOccupants)
//     console.log('Amenities:', bulletPoints(room.amenities))
// }

// function reserve(which) {
//     rooms[which].reserved = true
//     console.log('Thank you for reserving')
// }

// whatsAvailable(rooms);

// console.log('----------')

// var selected = 2;
// showDetails(rooms[selected]);

// console.log('----------')

// reserve(selected);

// console.log('----------')

// whatsAvailable(rooms);

/////////////////////HOW EQUALS WORK WITH OBJECTS///////////////////////

// var o1 = {
//         name: '0#1',
//         type: 'pear'
// }

// var o2 = {
//         name: 'O',
//         type: 'pear'
// }
// var o2 = o1             //Making o2 into the o1 object 
// o2.name = '0#2'
// o1.name = '0#1'

// function copyObject(o){
//     var result = {};
//     for(var key in o) {
//         result[key] = o[key]  //object comes first then you put the variable key inside
//     }
//     return result;
// }
// var o2 = copyObject(o1)

// console.log(o1)
// console.log(o2)
// console.log(o1 === o2)          //will give you a false result because they are not pointing to the same object 

///////////////////////////////TWO OBJECTS INSIDE ONE OBJECT/////////////////////////////////
var people = {
        person1: {                          //The first object people{} has two keys person1, person2 that hold two objects 
                firstName: 'Erika',
                lastName: 'Jose',
                age: 25

        },
        person2: {
            age: 27,
            firstName: 'Erika',
            lastName: 'Kim'
        }
}

function ages(p){
    for(var key in p){
        console.log(p[key].lastName)         //can test with last name or any other key                     
    }
}
people.person2.lastName = 'Kanye'               //This changes the lastName key of person2
ages(people)

function marriage (maidenName, marriedName, p){                 /////Another example for if you wanted to change the lastNames of the two people
    for(var key in p){
        if (maidenName === p[key].lastName){             //The key is in a variable and you can only use a [] not dot notation 
            p[key].lastName = marriedName
            p[key].maidenName = maidenName
        }
    }
}

marriage('Jose', 'Calderon', people)            //maidenName, marriedName, Object --from function 
console.log(people)