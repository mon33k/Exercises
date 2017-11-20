// var myElem = document.getElementById()
var input = window.prompt("write something");

function repeater (str) {
    var result = ""
    for(var i = 0; i < 3; i++) {
        result += " " + input;        
    }
    window.alert(result)
}

repeater(input);