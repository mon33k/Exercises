//With​ ​the​ ​files​ ​odd-even-nan.html​ ​and​ ​odd-even-nan.js​,​ ​use​ ​window.prompt()​​ ​to​ ​query​ ​the user​ ​for​ ​a​ ​number.​ ​Use​ ​​window.alert()​​ ​to​ ​tell​ ​the​ ​user​ ​"that​ ​number​ ​is​ ​odd",​ ​"that​ ​number​ ​is even",​ ​or​ ​"that​ ​is​ ​not​ ​a​ ​number",​ ​as​ ​is​ ​appropriate.

var input = window.prompt("write a number");

function oddOrEven (num) {
    var result = ""
        if(num % 2 === 0) {
            result = "That number is even";
        } else if (num === NaN) {
            result = "That is not a number";
        } else {
            result = "That number is odd";
        }
    window.alert(result)
}

oddOrEven(input);