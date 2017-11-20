

//Key for getting the p tag element string
var muffinKey = document.getElementById('count'); //magic variable didn't assign it a purpose yet

//This selects the text area 
var eatBtn = document.querySelector('#eat');   

var bakeBtn = document.querySelector('#bake');

//This takes the text in text box from user
eatBtn.addEventListener('click', function(event) {

    muffinKey.innerText = Number(muffinKey.innerText) -1;

    window.localStorage.setItem("muffinKey", muffinKey.innerText);

});

bakeBtn.addEventListener('click', function(event){

    muffinKey.innerText = Number(muffinKey.innerText) + 5;

    window.localStorage.setItem("muffinKey", muffinKey.innerText);

});

//This happens when you refresh the page it saves the information when you reload it again
// var muffinKey = document.querySelector() 
if (window.localStorage.length === 0) {
    muffinKey.innerText = 10;
} else {
    muffinKey.innerText = window.localStorage.getItem("muffinKey");     
}

//This is taking the text from inside the localStorage we set the value to be 