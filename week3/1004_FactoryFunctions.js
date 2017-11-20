// /**
//  * @function addFilm
//  * @param  {string} name
//  * @param  {string} director
//  * @param  {number} released
//  */
// function createFilm(name, director, released){
//     var film = {
//         name: name,
//         director: director,
//         released: released
//     }

//     return film;
// }


// function forEachElem(arr, func) {
//     for (var i = 0; i < arr.length; i++){
//         func(arr[i])
//     }
// }

// var films = []
// films.push(createFilm('Finding Nemo', 'Andrew Stanton and Lee Unkrich', 2003))
// films.push(createFilm('The Truman Show', 'Peter Weir', 1998))
// films.push(createFilm('The Usual Suspects', 'Bryan Singer', 1995))

// forEachElem(films, function(film) {
//     console.log(film.released)
// })



/////////////////Create Task example for App Exercise///////////////
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function createTask(title, completed) {
    var task = {
        title: title,
        completed: completed
    }
    return task
}

// function not being used 
function logTasks(taskArr){
    for (var i = 0; i < taskArr.length; i ++){
      console.log(i + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed)
    }
  }

function forEachElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}

function completeTask(index) {
    taskArr[index].completed = true
  }

var taskArr = []
taskArr.push(createTask("walk cat", true))
taskArr.push(createTask("do laundry", false))



function toggleCompleted(index) {
    taskArr[index].completed = !taskArr[index].completed
    var input = 'toggle 0'
    var inputArr = input.split(' ')
    if (inputArr[0] === 'toggle') {
        var index = Number(inputArr[1])         //reassigns index to start at index 1 and converts the input into a number
    } else if (taskArr[index] === undefined) {
          console.log('an element at that index does not exist')  
    }
    return taskArr
  }

function show (num){
    if (num === 1){
        logTasks(taskArr)
    } else if (num === 2){
        for (var i = 0; i < taskArr.length; i++) {
            if (!completeTask(i)) {     //will show what is true and won't show what is false
                console.log(taskArr[i].title + taskArr[i].completed)
            }
        }
        // forEachElem(taskArr, completeTask(index)) 
        // if (!completeTask(taskArr)){
            
        // }
        // else if num = 2
        // run a for loop through the taskArr 
        // if !completeTask(i) 
        // then log those tasks 
        }else if (num === 3){
        if (completeTask(i)) {
            console.log(taskArr[i].title + taskArr[i].completed)
        }       
    }
}

rl.on('line', function (input) {
    var inputArr = input.split(' ')
    var taskTitle = inputArr.slice(1).join(' ')   //To get this input we will take all elements of the array starting from index 1, and join these back into a string with spaces.
    if (inputArr[0] !== 'add'){
        console.log('please enter ADD + Task');
    }else if (input[0] === "show") { 
        show(taskTitle + task.completed)                             //puts the rest of the words after index 0 to be one thing in an array 
    } else if (inputArr[0] === "toggle") {
        // run toggleCompleted function that takes in index # as argument
    } else {
        var taskObject = createTask(taskTitle, false)    //creates object and returns it 
        taskArr.push(taskObject)
        forEachElem(taskArr, function (task, index) {   //i and index are the same thing. This function is called back and a function is made inside of it's parameters
            console.log((index + 1) + ', ' + task.title + ' ' + task.completed)    
          
        })
    }
})