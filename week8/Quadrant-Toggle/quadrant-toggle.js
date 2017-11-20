// Quadrant Toggle

// Using the files quadrant-toggle.html and quadrant-toggle.js, build a page with four divs that each occupy a quarter of the window: #topLeft, #topRight, #bottomLeft, and #bottomRight. When a user clicks any quadrant, the background-color property of that div should change from white to black, or from black to white, as appropriate. (If you prefer other colors you are encouraged to use them.)

//var body = document.querySelector('body')

var topLeft = document.querySelector('#tl');
var topRight = document.querySelector('#tr');
var bottomLeft = document.querySelector('#bl');
var bottomRight = document.querySelector('#br');

topLeft.addEventListener('click', function () {
    if (topLeft.style.backgroundColor === "black") {
        topLeft.style.backgroundColor = "blue"
    } else {
        topLeft.style.backgroundColor = "black"
    }
});

topRight.addEventListener('click', function() {
    if (topRight.style.backgroundColor === "black") {
        topRight.style.backgroundColor = "red"
    } else {
        topRight.style.backgroundColor = "black"
    }
})

bottomLeft.addEventListener('click', function() {
    if (bottomLeft.style.backgroundColor === "black") {
        bottomLeft.style.backgroundColor = "yellow"
    } else {
        bottomLeft.style.backgroundColor = "black"
    }
})

bottomRight.addEventListener('click', function() {
    if (bottomRight.style.backgroundColor === "black") {
        bottomRight.style.backgroundColor = "green"
    } else {
        bottomRight.style.backgroundColor = "black"
    }
})

