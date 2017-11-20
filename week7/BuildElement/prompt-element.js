var input = windows.prompt("Enter entire HTML element with opening and closing tags")

function element (input) {
    var text = document.getElementById("container");
    text.innerHTML = input;
}

element(input);

// function element (input) {
//     var text = document.getElementById("container");
//     text.innerText = input;
// }

// element(input);
