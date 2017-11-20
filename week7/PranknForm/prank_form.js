//----------BOILER PLATE-----------//
let form = document.getElementById('form')
var paragraph = document.querySelector('#para')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    paragraph.innerText = "You typed: I hate marshmallows"

    marshmallows();

});

var userInput = document.querySelector("#userInput");

function marshmallows() {
    setTimeout(function() {

        paragraph.innerText = "JK, you typed: " + userInput.value;
        
    }, 1500);
}
