
var id = window.prompt("Enter an ID either one, two, three, or four");
var text = window.prompt("Enter text");

function updateItems (id, text) {
    document.getElementById(id).innerText = text;
}

updateItems(id, text);
