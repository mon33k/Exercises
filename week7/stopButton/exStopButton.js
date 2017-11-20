

var counter = document.querySelector("#count")

var stopCountBtn = document.querySelector('#stopBtn');   
var startCountBtn = document.querySelector('#startBtn')

startCountBtn.addEventListener('click', function(event) {    
    var timerID = setInterval(function() {

    counter.innerText = Number(counter.innerText) + 1;        
    counter.innerText = starter++    

    }, 250);

});

stopCountBtn.addEventListener('click', function(event) {
    
    window.clearInterval(timerID);
    
});




//------Lev's add on for a lock------//
// var start = document.querySelector('#start')
// var starter = 0
// var timer
// var locked = false;

// start.addEventListener('click', function (event) {
//     var counter = document.querySelector('h1');
//     if (!locked){
//         locked = true;
//         timer = setInterval(function () {
//             starter += 1;
//             counter.innerText = starter;
//         }, 250)
//         console.log("id: ", timer)
//     } else {
//         console.log('locked')
//     }
// })

// var stop = document.querySelector('#stop')
// stop.addEventListener('click', function (event) {
//     clearInterval(timer)
//     locked = false;
//     console.log('cleared lock')
// })