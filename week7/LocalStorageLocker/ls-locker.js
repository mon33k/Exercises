
//-----BOILER PLATE----//

//Key for getting the p tag element string
var blurbKey = 'allTheBlurb';

//This selects the text area 
var input = document.querySelector('#blurb');   
blurbKey.value = window.localStorage.getItem("text");

//This takes the text in text box from user
input.addEventListener('input', function(event) {
window.localStorage.setItem("text", blurbKey.value)


var allTheBlurb = document.querySelector('#alltheblurb');


allTheBlurb.innerText += '' + input.value; 
window.localStorage.setItem(blurbKey, allTheBlurb.innerText);

input.value = '';

});

var allTheBlurb = document.querySelector('#alltheblurb') 
allTheBlurb.innerText = window.localStorage.getItem(blurbKey); //This is taking the text from inside the localStorage we set the value to be 