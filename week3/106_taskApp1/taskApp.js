/*
Level 1

When the user types any text and presses <enter>, create a new task object with the text as description, and the completed value false. Add the new task object to the list and log all tasks. 

0. walk dog. Completed: false.

1. wash cat. Completed false.


Level 2

Modify your code so that it only adds a new task when the first word the user types is 'ADD'.  The new task's description will be everything after the word ADD. For example, if the user types:

ADD buy milk

The new task will have description 'buy milk' and completed: false.

If the first word is not `ADD`, the program will ignore the input or display an explanatory message. 


 Level 3

Add a toggle command, so that when the user writes:

toggle [id] 

The task with that id will have its `completed` status toggled. The id will be equal to the index position of the task in the array.
id === taskArr[i] 
toggle 1
return: 1. walk Luna completed false 

 Level 4

Add a show command with three options 1. all 2. active 3. completed.

1. When the user writes show all the program will display all tasks, as usual.

2. When the user writes show active the program will display only the tasks with completed property set to false.

3. When the user writes show completed the program will display only the tasks with completed property set to true.

*/


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
 
//Function that holds your object
function createTask(title) {
    var task = {
        title: title,
        completed: false
    }
    return task
}
//Now this function is going to go through each element in your array 
//it will log the number in the index of your array and the title, comepleted: a BOOLEAN T/F
function logTasks(taskArr){
    for (var i = 0; i < taskArr.length; i ++){
      console.log(i + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed)   //might change to take a call back because it just give's false 
    }
  }
//The Array that's going to hold your tasks
var taskArr = [] 

  forEachElem(taskArr, function (task, index) {   //i and index are the same thing. This function is called back and a function is made inside of it's parameters
  console.log((index + 1) + ', ' + task.title + ' ' +task.completed)    
    

//This function makes all the tasks in the array by default false because you haven't done it yet 
function uncompleteTask(index) {
    taskArr[index].completed = false 
  }

//This function will change whether the task is completed or not completed, or Toggle to change the boolean TRUE OR FALSE
function toggleCompleted(index) {
    taskArr[index].completed = !taskArr[index].completed
    // var input = 'toggle 0'              //This is mimicing if the user inputs toggle 0 as a string
    // var inputArr = input.split(' ')     //This turns that response into an array by spliting it into two at index 0 and index 1
       //Most of the time you need to return something from a function so return the array 
  }


rl.on('line', function (input) {
    var inputArr = input.split(' ')
    var taskTitle = inputArr.slice(1).join(' ')   //To get this input we will take all elements of the array starting from index 1, and join these back into a string with spaces.
    taskArr.push(inputArr)
    if (inputArr[0] === 'add'){
        taskTitle.push(input)//add task  
    } else if (inputArr[0] === 'toggle') {      //Index 0 holds the word toggle
        //change task completion status
        var index = Number(inputArr[1])         //Index is reassigned to start at index 1 and converts the input into a number from a string
        toggleCompleted(index)
        logTasks(taskArr)
    } else if (inputArr[0] === undefined) {  //If Any task in the index of the array is undefined as an input 
          console.log('an element at that index does not exist')    //Error message
    } else {
        var taskObject = createTask(taskTitle, false)    //creates object and returns it 
        taskArr.push(taskObject)
        forEachElem(taskArr, function (task, index) {   //i and index are the same thing. This function is called back and a function is made inside of it's parameters
            console.log((index + 1) + ', ' + task.title + ' ' +task.completed)             
        })         
    }
})


// // function show (num){
// //     if (num === 1){
// //         logTasks(taskArr)
// //     } else if (num === 2){
// //         for (var i = 0; i < taskArr.length; i++) {
// //             if (!completeTask(i)) {
// //                 console.log(taskArr[i].title + taskArr[i].completed)
// //             }
// //         }
// //         // forEachElem(taskArr, completeTask(index)) 
// //         // if (!completeTask(taskArr)){
            
// //         // }
// //         // else if num = 2
// //         // run a for loop through the taskArr 
// //         // if !completeTask(i) 
// //         // then log those tasks 
// //         console.log(completeTask(taskArr))

// //     }else if(num === 3){

// //     }
// // }







var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 
function createTask(title , completed) {
  var task = {
    title: title,
    completed: completed
  }
  return task
}
​
var taskArr = [] 
 //forEachElem(taskArr, function (task, index) { 
  function forEachElem (task) { 
  for ( var index = 0 ; index < taskArr.length ; index++){
  console.log((index + 1) + ', ' + taskArr[index].title.slice(1).join(' ') + ' ' +taskArr[index].completed)
  }  
}
//function uncompleteTask(index) {
// taskArr[index].completed === false 
 //}
​
 //function completeTask(index) {
  // taskArr[index].completed === true 
 //}
​
function toggleCompleted(id) {
  taskArr[id - 1].completed = !taskArr[id -1 ].completed
  // var input = 'toggle 0'       
  // var inputArr = input.split(' ')   
    
 }
rl.on('line', function (input) {
  var inputArr = input.split(' ')
  //var taskTitle = inputArr.slice(1).join(' ') 
  // taskArr.push(createTask(input , false))
  //askArr.push(inputArr)
  // if (inputArr[0] === 'add'){  
  //  taskTitle.push(input)//add task 
   if (inputArr[0] === 'toggle') {   
    //change task completion status
    //var index = Number(inputArr[1]) 
    var id = Number(inputArr[1])  
    toggleCompleted(id)
    // logTasks(taskArr)
   } else if (inputArr[0] === 'show' & inputArr[1] === 'active' ){
    for( index = 0 ; index < taskArr.length ; index++){
    if (taskArr[index].completed === false ){
     console.log((index + 1) + ', ' + taskArr[index].title.slice(1).join(' ') + ' ' +taskArr[index].completed)
    }
   } 
  }else if ((inputArr[0] === 'show' & inputArr[1] === 'completed' )){
    for( index = 0 ; index < taskArr.length ; index++){
      if (taskArr[index].completed === true ){
       console.log((index + 1) + ', ' + taskArr[index].title.slice(1).join(' ') + ' ' +taskArr[index].completed)
      }
    }
  
  }else if ((inputArr[0] === 'show' & inputArr[1] === 'all' )){
     for( index = 0 ; index < taskArr.length ; index++){
       console.log((index + 1) + ', ' + taskArr[index].title.slice(1).join(' ') + ' ' +taskArr[index].completed)} 
​
  } else if (inputArr[0].toLowerCase() === 'add'){
    var taskObject = createTask(inputArr, false)  
      taskArr.push(taskObject)
      forEachElem(taskObject ) 
​
  } else if (inputArr[0] === undefined) { 
        console.log('an element at that index does not exist') 
    // console.log((index + 1) + ', ' + task.title + ' ' +task.completed)          
  }
​
  console.log("type one of the option {add , show all , show active , show completed} ")
})
console.log('your list is empty add a task please')