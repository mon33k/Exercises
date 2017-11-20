// var readline = require('readline');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// function createTask(title) {
//     var task = {
//         title: title,
//         completed: false
//     };
//     return task;
// }

// var taskArr = [];

// function logTasks(taskArr){
//     for (var i = 0; i < taskArr.length; i ++){
//       console.log(i + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed); 
//     }
//   }


// forEachElem (taskArr, function (task, index) {   
//   console.log((index + 1) + ', ' + task.title + ' ' +task.completed);
// })

// function uncompleteTask (index) {
//     taskArr[index].completed = false; 
//   }


// function toggleCompleted(index) {
//     taskArr[index].completed = !taskArr[index].completed;
//     // var input = 'toggle 0'              //This is mimicing if the user inputs toggle 0 as a string
//     // var inputArr = input.split(' ')     //This turns that response into an array by spliting it into two at index 0 and index 1
//        //Most of the time you need to return something from a function so return the array 
//   }


// rl.on('line', function (input) {
//     var inputArr = input.split(' ');
//     var taskTitle = inputArr.slice(1).join(' ');   
//     taskArr.push(inputArr);
//     if (inputArr[0] === 'add'){
//         taskTitle.push(input);         
//     } else if (inputArr[0] === 'toggle') {      
//         var index = Number(inputArr[1]);     
//         toggleCompleted(index);
//         logTasks(taskArr);
//     } else if (inputArr[0] === undefined) {  
//           console.log('an element at that index does not exist');   
//     } else {
//         var taskObject = createTask(taskTitle, false);   
//         taskArr.push(taskObject);
//         forEachElem(taskArr, function (task, index) {   
//             console.log((index + 1) + ', ' + task.title + ' ' +task.completed);          
//         });    
//     }
// });

// var readline = require('readline')
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f');
// }
// function createTask(title) {
//     var task = {
//         title: title,
//         completed: false
//     }
//     return task
// }
// function showActive(active) {
//     for (var i = 0; i < active.length; i++) {
//         if (active[i].completed === false) {
//             console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed + "\n")
//         }
//     }
// }
// function showCompleted(active) {
//     for (var i = 0; i < active.length; i++) {
//         if (active[i].completed === true) {
//             console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed + "\n")
//         }
//     }
// }
// function logTodoList(taskArr) {
//     for (var i = 0; i < taskArr.length; i++) {
//         console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed + "\n")
//     }
// }
// function logTasks(array, callback) {
//     taskArr.push(callback)
//     for (var i = 0; i < taskArr.length; i++) {
//         console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed + '\n')
//     }
// }
// function toggleID(arr, id) {
//     if (arr[id].completed === false) {
//         arr[id].completed = true
//         console.log("Congratulation on completing this task!\n\n" + "Title: " + arr[id].title + '. Completed: ' + arr[id].completed + "\n")
//     } else {
//         console.log('You already completed this task\n')
//     }
// }
// var taskArr = []
// rl.on('line', function (input) {
//     clear()
//     console.log("Todo List\n")
//     var inputArr = input.toLowerCase().trim().split(' ')
//     if (inputArr[0] === "add") {
//         logTasks(taskArr,createTask(inputArr.slice(1).join(' '))) 
//     } else if (inputArr[0] === 'show' && inputArr[1] === "all") {
//         logTodoList(taskArr)
//     } else if (inputArr[0] === "show" && inputArr[1] === "active") {
//         showActive(taskArr)
//     } else if (inputArr[0] === "show" && inputArr[1] === "completed") {
//         showCompleted(taskArr)
//     } else if (inputArr[0] === 'toggle' && inputArr[1] !== undefined) {
//         var id = Number(inputArr[1])
//         toggleID(taskArr, id - 1)
//     } else {
//         console.log('Wrong Input\n')
//     }
//     console.log("Task Manager: What will you like to do: ShowAll, ShowActive, ShowCompleted, ADD or Toggle \n")
// })
// console.log("Task Manager! What will you like to do: ShowAll, ShowActive, ShowCompleted, ADD\n ")




// ///////////////////////////////ESCAPE THE ROOM/////////////////////////////////////
// 'use strict';
// /*
//  *   Boilerplate
//  */


// var readline = require('readline');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f');
// }

// // End of boilerplate

// var ESCAPE_MESSAGE = 'You escaped the room!'

// /**
//  * @function findElem
//  * @param  {any[]} arr
//  * @param  {function} callback
//  * @return {any | void} {the first element, if exists in the array, to satisfy the callback}
//  */
// function findElem(arr, callback) {
//     for (var i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return arr[i];
//         }
//     }
// }


// /**
//  * Represents a Result of interacting with an object in the room
//  * @constructor
//  * @param {string} {description}
//  * @param {string[]} [items]
//  */
// function Result(description, items){
//     this.description = description;
//     this.items = items || null;
// }

// /**
//  * Represents a thing in the room
//  * @constructor
//  * @param  {string} name
//  * @param  {string} description
//  * @param  {string[]} items  
//  * @param  {string[]} neededItems
//  */
// function RoomObject(name, description, items, neededItems, actions) {
//     this.name = name;
//     this.description = description;
//     this.items = items;
//     this.neededItems = neededItems;
//     this.actions = actions;
// }


// /**
//  * Get the items in the RoomObject
//  * @function getItems
//  * @return {string[]}
//  */
// RoomObject.prototype.getItems = function () {
//     var itemsRef = this.items;
//     this.items = [];
//     return itemsRef;
// };

// /**
//  * Remove all needed items
//  * @function removeNeededItem
//  */
// RoomObject.prototype.removeNeededItems = function () {
//     this.neededItems = [];
// };

// /**
//  * Check if an item is needed for this RoomObject
//  * @function isItemNeeded
//  * @param  {string} itemName
//  * @return {boolean}
//  */
// RoomObject.prototype.isItemNeeded = function (item) {
//     return this.neededItems.indexOf(item) !== -1
// };

// /**
//  * Try to use an item on this RoomObject
//  * @function useItem
//  * @param  {string} item
//  * @return {boolean}
//  */
// RoomObject.prototype.useItem = function(item) {
//     var isNeeded = this.isItemNeeded(item)
//     if (!isNeeded) {
//         return new Result("Could not use " + item + " on " + this.name);
//     } else {
//         this.removeNeededItems();
//         return new Result(" Used " + item + " -> " + this.name);
//     }
// }

// /**
//  * Check if there are any items in this RoomObject
//  * @function hasItems
//  * @return {boolean}
//  */
// RoomObject.prototype.hasItems = function(){
//     return this.items.length !== 0;
// }

// /**
//  * Check if any items are needed to interact with this RoomObject
//  * @function hasItems
//  * @return {boolean}
//  */
// RoomObject.prototype.needsItems = function(){
//     return this.neededItems.length !== 0;
// }

// /**
//  * Try to interact with this RoomObject
//  * @function interact
//  * @return {Result}
//  */
// RoomObject.prototype.interact = function (action) {
//     if (this.actions.indexOf(action) === -1){
//         return new Result("cannot " + action + " " + this.name)
//     } else if (this.needsItems()) {
//         return new Result(this.description)
//     } else if (this.hasItems()) {
//         return new Result("You " + action + " the " + this.name, this.getItems()) 
//     } else if (this.name === "Door") {
//         return new Result(ESCAPE_MESSAGE)
//     } else {
//         return new Result("didn't find anything useful")         
//     }
// }

// /**
//  * Represents a level in the game
//  * @constructor
//  * @param  {RoomObject[]} objects
//  */
// function Room(objects) {
//     this.objects = objects;
// }

// /**
//  * Try to retrieve a RoomObject contained in this Room 
//  * @function getObject
//  * @param  {string} objectName
//  * @return {RoomObject | void}
//  */
// Room.prototype.getObject = function (objectName) {
//     var name = objectName.toLowerCase()
//     var object = findElem(this.objects, function (object) {
//         return object.name.toLowerCase() === name
//     })
//     return object
// }

// /**
//  * Player
//  * @constructor
//  * @param  {string[]} items 
//  * @param  {Room} room  
//  */
// function Player(room) {
//     this.items = [];
//     this.currentRoom = room
// }

// /**
//  * Try to get an item from the player's inventory
//  * @param  {string} itemName
//  * @return {string | void}
//  */
// Player.prototype.getItem = function (itemName) {
//     var name = itemName.toLowerCase()
//     var item = findElem(this.items, function (itemName) {
//         return itemName.toLowerCase() === name
//     })
//     return item
// }

// /**
//  * Add items to the player's inventory
//  * @function
//  * @param  {string[]} items
//  */
// Player.prototype.addItems = function (items) {
//     this.items = this.items.concat(items)
// }

// /**
//  * Try to interact with a RoomObject
//  * @param  {string} objectName
//  * @return {string}
//  */
// Player.prototype.interactWithObject = function (objectName, action) {
//     var object = this.currentRoom.getObject(objectName)

//     if (object === undefined) {
//         return objectName + " not found in room"
//     } else {
//         var result = object.interact(action);
//         if (result.items){
//             this.addItems(result.items)
//             return result.description + "\n" + "found items: " + result.items
//         }
//         return result.description;
//     }
// }

// /**
//  * Try to use item on an RoomObject
//  * @param  {string} itemName
//  * @param  {string} objectName
//  * @return {string}
//  */
// Player.prototype.useItem = function (itemName, objectName) {
//     var item = this.getItem(itemName)
//     var object = this.currentRoom.getObject(objectName)

//     if (item === undefined) {
//         return itemName + " not found in inventory"
//     } else if (object === undefined) {
//         return objectName + " not found"
//     } else {
//         var result = object.useItem(item);
//         return result.description;
//     }
// }

// /**
//  * Game
//  * @constructor
//  * @param  {Room[]} rooms
//  */
// function Game(rooms) {
//     this.currentRoomIndex = 0;
//     this.rooms = rooms;
// }

// /**
//  * Get the current room
//  * @return {Room}
//  */
// Game.prototype.getCurrentRoom = function(){
//     return this.rooms[this.currentRoomIndex]
// }

// /**
//  * Set and return the next room
//  * @return {Room}
//  */
// Game.prototype.getNextRoom = function(){
//     this.currentRoomIndex++;
//     return this.rooms[this.currentRoomIndex]
// }

// /**
//  * @function getObjectNames
//  * @param  {RoomObject[]} objects
//  * @return {string}
//  */
// function getObjectNames(objects) {
//     var objectNames = objects.map(function (object) {
//         return object.name
//     })
//     return objectNames.join("\n")
// }

// /**
//  * @function view
//  * @param  {string} [message]
//  * @return {string}
//  */
// function view(message) {
//     message = message || ""
//     var room = player.currentRoom
//     var title =
//         "--Escape the room-- \n" + 
//         "1. [action] [object] \n" + 
//         "2. use [item] [object] \n" 

//     var objects =
//         "--You See-- \n" + getObjectNames(room.objects) + "\n";

//     var items =
//         "--Your Items-- \n" + player.items.join("\n") + "\n";

//     var input =
//         "--Your Input--";

//     return title + objects + items + message + input;
// }

// function parseInput(words){
    
//     if (words.length === 2){
//         var action = words[0].toLowerCase()
//         var objectName = words[1].toLowerCase();
//         var message = player.interactWithObject(objectName, action)
//         if (message === ESCAPE_MESSAGE){
//             return "YOUR'E FREE"
//         }
//         return message
//     } else if (words[0] === "use" && words.length === 3) {
//         var itemName = words[1].toLowerCase();
//         var objectName = words[2].toLowerCase();
//         var message = player.useItem(itemName, objectName)
//         return message;
//     } else {
//         return "invalid command"
//     }
     
// }

// /**
//  *  Called when a user presses <Enter>
//  */
// rl.on('line', function (input) {
//     clear()

//     var words = input.split(' ')
    
//     var message = "-- message -- \n" 
//                   + parseInput(words)
//                   + "\n"

//     console.log(view(message))    
// });

// var bookshelf = new RoomObject(
//     "Bookshelf",
//     "Handsome walnut bookshelf",
//     [
//         "A Dummy's Guide To Escape Rooms",
//          "Harry Potter and the Order of the Phoenix",
//         "Vogue Magazine, September 2017",
//         "Death Note",
//         "flashlight"
//     ],
//     [],
//     [ "search", "look", "examine" ])

// var desk = new RoomObject(
//     "Desk",
//     "Handsome walnut 3-drawer desk",
//     [ "toothbrush", "letter", "match" ],
//     [ "flashlight" ],
//     [ "search", "look", "open", "examine" ]
// )


// var safebox = new RoomObject(
//     "Safebox",
//     "A large, heavy safebox. It requires a combination to open.",
//     [ "key" ],
//     [ "letter" ],
//     [ "open", "search" ]
// )

// var flashlight = new RoomObject(
//     "Flashlight",
//     "A standard flashlight.",
//     [],
//     [],
//     [ "use", "shine" ]
// )

// var letter = new RoomObject(
//     "Letter",
//     "a letter that reads: 12-39-27",
//     [],
//     [ "flashlight" ],
//     [ "read", "examine" ] 
// )

// var key = new RoomObject(
//     "Key",
//     "A golden key.",
//     [],
//     [],
//     [ "use", "unlock" ]
// )

// var Door = new RoomObject(
//     "Door",
//     "A heavy, oak door. It's locked.",
//     [],
//     [ "key" ],
//     [ "open", "unlock" ]
// )

// // Create an array of Room objects
// var office = new Room([bookshelf, desk, safebox, letter, Door])

// // Create a new Game
// var game = new Game([office])

// // Create a new Player
// var player = new Player(game.getCurrentRoom())

// clear()
// console.log(view())

