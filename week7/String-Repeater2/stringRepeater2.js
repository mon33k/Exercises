// var myElem = document.getElementById()
var input = window.prompt("write something");
var multiply = window.prompt("how many times it's repeated")

function repeater (str) {
    var result = "";
    for(var i = 0; i < multiply; i++) {
        result += " " + input;        
    }
    window.alert(result)
}

repeater(input);