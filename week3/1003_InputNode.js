// //Github: https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/user_input/user_input.md
// //Lev gives examples for us to understand the concept before going into node
// function sayHello(){
//     console.log('hello')
// }
// setInterval(sayHello(), 1000)       
// //sayHello is invoking the function setInterval, but it will give an undefined result, so the way that we need to write it is:
// var sayHello = function (){          
//     console.log('hello')
// }
// setInterval(sayHello,1000)      //passing the name of the function as a variable it will invoke the setInterval function and execute to the time of 1 second. 

// setTimeout(sayHello, 0)         //setTimeout and setInterval will wait till the end of any sequential code to execute 

// setInterval(sayHello, 100)         
// setInterval(sayHello, 150)

/////////////////

// var readline = require('readline')  //require is a way to load the external js function for this ex we are loading readline
// console.log(readline)               //readline is a file or modual available built into node gives a way for us to read data from the terminal - a readable stream

// var rl = readline.createInterface({         //after using readline the rl object will take an input and 
//     input: process.stdin,                   
//     output: process.stdout
//   })
// //on is a way for us to respond to events. another instance of a synchronous, Whenever the line function happens we are calling parseInput. 
//   function parseInput(input) {       
//     console.log('your input was: ' + input)
//   }
//   rl.on('line', parseInput)     //we are passing a string 'line' to rl that checks what the string is and based on what the string is it would do something. Readline (r1) knows what the line event is. 
  
//   rl.on('line', function(input){
//       console.log(typeof input)
//       console.log()
//   })

  ///////////////////Inputting a Number Example from Lev////////////////////////////
//   var readline = require('readline')
  
//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   function clear () {
//     process.stdout.write('\u001B[2J\u001B[0;0f')
//   }
  
//   rl.on('line', function(input){
//     clear()
//     var maybeNumber = Number(input)
  
//     if (isNaN(maybeNumber)){
//       console.log("that's not a number")
//     } else {
//       console.log('your input was: ' + maybeNumber)    
//     }
//     console.log('insert a number')
//   })
  
//   console.log('insert a number')


  //////////////AirBnB 0.1////////////////////
//   var readline = require('readline')
  
//   var options = 'list, show n, reserve n, occupancy n, search amenity'
  
//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   var rooms = [
//       {
//           price: 200,
//           location: '11 Broadway, NY',
//           maxOccupants: 3,
//           amenities: ['washer/dryer', 'wifi', 'cable']
//       },
//       {
//           price: 100,
//           location: '11 Delancey, NY',
//           maxOccupants: 1,
//           amenities: []
//       },
//       {
//           price: 2000,
//           location: '1 Park Pl, NY',
//           maxOccupants: 2,
//           amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
//       },
//       {
//           price: 90000,
//           location: '1 Broad St, NY',
//           maxOccupants: 33,
//           amenities: ['disco ball', 'wifi']
//       },
//       {
//           price: 2000,
//           location: '2312 144th St, NY',
//           maxOccupants: 4,
//           amenities: ['wifi']
//       },
//       {
//           price: 200000,
//           location: '47-10 Austell Pl, NY',
//           maxOccupants: 200,
//           amenities: ['drill', 'sometimes wifi', 'luna']
//       },
//       {
//           price: 0,
//           location: 'Times Square, NY',
//           maxOccupants: 3,
//           amenities: ['sewage water', 'hagglers', 'naked cowboy']
//       },
//       {
//           price: 200000,
//           location: '1600 Pennsylvania Ave, DC',
//           maxOccupants: 500,
//           amenities: ['nixon\'s bowling', 'orange hairpiece', 'oval office', 'pair of small hands']
//       },
//       {
//           price: 2000000,
//           location: 'Falchi Bldg, NY',
//           maxOccupants: 5000,
//           amenities: ['food truck']
//       },
//       {
//           price: 250,
//           location: 'Washington Pl, NY',
//           maxOccupants: 100,
//           amenities: ['fountain', 'dosa cart']
//       }    
//   ];
  
//   // make the string exactly as long as len
//   function padTo(str, len) {
//       if (str.length > len) {
//           return str.slice(0, len - 3) + '...'
//       } else {
//           while (str.length < len) {
//               str += ' '
//           }
//           return str;
//       }
//   }
  
//   // make the string exactly as long as len
//   function padLeft(str, len) {
//       var money = str
//       if (money.length > len) {
//           return money.slice(0, len - 3) + '...'
//       } else {
//           while (money.length < len) {
//               money = ' ' + money
//           }
//           return money;
//       }
//   }
  
//   function toMoney(num) {
//       return '$' + num.toString()
//   }
  
//   function whatsAvailable() {
//       console.log(
//           padLeft('ID', 2),
//           '...',
//           padTo('Address', 30), 
//           ' ', 
//           padLeft('Price', 8)
//       );
//       for (var i = 0; i < rooms.length; i++) {
//           if (rooms[i].reserved) {
//               continue;
//           }
//           var counter = i + 1;
//           console.log(
//               padLeft(counter.toString(), 2),
//               '...',
//               padTo(rooms[i].location, 30), 
//               ' ', 
//               padLeft(toMoney(rooms[i].price), 8)
//           );
//       }
//   }
  
//   function bulletPoints(list) {
//       return '\n - ' + list.join('\n - ')
//   }
  
//   function showDetails(n) {
//       var room = rooms[n]
//       console.log('Details of room #' + (n + 1))
//       console.log('----------------------\n')
//       if (room.reserved) {
//           console.log('[RESERVED]')
//       }
//       console.log('Location:', room.location)
//       console.log('Price:', toMoney(room.price))
//       console.log('Max. Occupancy:', room.maxOccupants)
//       console.log('Amenities:', bulletPoints(room.amenities))
//   }
  
//   function reserve(n) {
//       if (rooms[n].reserved) {
//           console.log('Sorry, it\'s already reserved.')
//           return
//       } 
//       rooms[n].reserved = true                      //setting falsey undefined reserved to true
//       console.log('Thank you for reserving')
//   }
  

//   function occupancy(n, max){     //takes two arguments which room n, how many people 
//     rooms[n].maxOccupants = max         
//     console.log('Occupants set.')       
    
//  } 

//  function search (amenity){    //takes one argument which room n
//     console.log(
//         padLeft('ID', 2),
//         '...',
//         padTo('Address', 30), 
//         ' ', 
//         padLeft('Price', 8)
//     );
//     for (var i = 0; i < rooms.length; i++) {
//         if (rooms[i].reserved || !rooms[i].amenities.includes(amenity)) {
//             continue;
//         }
//         var counter = i + 1;
//         console.log(
//             padLeft(counter.toString(), 2),
//             '...',
//             padTo(rooms[i].location, 30), 
//             ' ', 
//             padLeft(toMoney(rooms[i].price), 8)
//         );
//     }
//  }

//   rl.on('line', function(input) {
//       var inputArr = input.split(' ')   //Whatever is entered by the operator is split by spaces
//       if (inputArr[0] === 'list') {
//           whatsAvailable();        
//       } else if (inputArr[0] === 'show') {
//           showDetails(inputArr[1] - 1)
//       } else if (inputArr[0] === 'reserve') {
//           reserve(inputArr[1] - 1)
//       } else if (inputArr[0] === 'occupancy') {
//           occupancy(inputArr[1] - 1, inputArr[2])   
//       } else if (inputArr[0] === 'search') {    //amenity
//           search(inputArr.slice(1).join(' '))   //puts two or multiple things together that you're searching for ex: disco ball, instead of inputArr[1] which would only allow for you to search for disco and ball would be separate
//       }else{
//           console.log('Unknown command: ' + input)
//       }
  
//       console.log('\n\nPlease chose one of [' + options + '] $')
//   })
  
//   console.log('Please chose one of [' + options + '] $')

//   //Change the number of occupants from the command line 


  ///////////AirBnB 0.3//////////////////////took out whatsAvailable and search functions and modified rl to include both 



var readline = require('readline')
  
var options = 'list, show n, reserve n, occupancy n max, search amenity';
  
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
  
  var rooms = [
      {
          price: 200,
          location: '11 Broadway, NY',
          maxOccupants: 3,
          amenities: ['washer/dryer', 'wifi', 'cable']
      },
      {
          price: 100,
          location: '11 Delancey, NY',
          maxOccupants: 1,
          amenities: []
      },
      {
          price: 2000,
          location: '1 Park Pl, NY',
          maxOccupants: 2,
          amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
      },
      {
          price: 90000,
          location: '1 Broad St, NY',
          maxOccupants: 33,
          amenities: ['disco ball']
      },
      {
          price: 2000,
          location: '2312 144th St, NY',
          maxOccupants: 4,
          amenities: []
      },
      {
          price: 200000,
          location: '47-10 Austell Pl, NY',
          maxOccupants: 200,
          amenities: ['drill', 'sometimes wifi', 'luna']
      },
      {
          price: 0,
          location: 'Times Square, NY',
          maxOccupants: 3,
          amenities: ['sewage water', 'hagglers', 'naked cowboy', 'wifi']
      },
      {
          price: 200000,
          location: '1600 Pennsylvania Ave, DC',
          maxOccupants: 500,
          amenities: ['nixon\'s bowling', 'orange hairpiece', 'oval office', 'pair of small hands']
      },
      {
          price: 2000000,
          location: 'Falchi Bldg, NY',
          maxOccupants: 5000,
          amenities: ['food truck']
      },
      {
          price: 250,
          location: 'Washington Pl, NY',
          maxOccupants: 100,
          amenities: ['fountain', 'dosa cart']
      }    
  ];
  
  // make the string exactly as long as len
  function padTo(str, len) {
      if (str.length > len) {
          return str.slice(0, len - 3) + '...'
      } else {
          while (str.length < len) {
              str += ' '
          }
          return str;
      }
  }
  
  // make the string exactly as long as len
  function padLeft(str, len) {
      var money = str
      if (money.length > len) {
          return money.slice(0, len - 3) + '...'
      } else {
          while (money.length < len) {
              money = ' ' + money
          }
          return money;
      }
  }
  
  function toMoney(num) {
      return '$' + num.toString()
  }
  
  function bulletPoints(list) {
      return '\n - ' + list.join('\n - ')
  }
  
  function showDetails(n) {
      var room = rooms[n]
      console.log('Details of room #' + (n + 1))
      console.log('----------------------\n')
      if (room.reserved) {
          console.log('[RESERVED]')
      }
      console.log('Location:', room.location)
      console.log('Price:', toMoney(room.price))
      console.log('Max. Occupancy:', room.maxOccupants)
      console.log('Amenities:', bulletPoints(room.amenities))
  }
  
  function reserve(n) {
      if (rooms[n].reserved) {
          console.log('Sorry, it\'s already reserved.')
          return
      } 
      rooms[n].reserved = true
      console.log('Thank you for reserving')
  }
  
  function occupancy(n, max) {
      rooms[n].maxOccupants = max
      console.log('Occupants set.')
  }
  
  function list(callback) {
      console.log(
          padLeft('ID', 2),
          '...',
          padTo('Address', 30), 
          ' ', 
          padLeft('Price', 8)
      );
      for (var i = 0; i < rooms.length; i++) {
          if (callback(rooms[i])) {
              var counter = i + 1;
              console.log(
                  padLeft(counter.toString(), 2),
                  '...',
                  padTo(rooms[i].location, 30), 
                  ' ', 
                  padLeft(toMoney(rooms[i].price), 8)
              );
          }
      }
  }
  
  rl.on('line', function(input) {
      var inputArr = input.split(' ')
      if (inputArr[0] === 'list') {
          list(function (room) {
              return !room.reserved
          });        
      } else if (inputArr[0] === 'show') {
          showDetails(inputArr[1] - 1)
      } else if (inputArr[0] === 'reserve') {
          reserve(inputArr[1] - 1)
      } else if (inputArr[0] === 'occupancy') {
          occupancy(inputArr[1] - 1, inputArr[2])
      } else if (inputArr[0] === 'search') {
          var amenity = inputArr.slice(1).join(' ')
          list(function (room) {
              return !room.reserved && room.amenities.indexOf(amenity) > -1
          });                
      } else {
          console.log('Unknown command: ' + input)
      }
  
      console.log('\n\nPlease chose one of [' + options + '] $')
  })
  console.log('Please chose one of [' + options + '] $')