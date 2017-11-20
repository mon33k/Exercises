// Example:​ ​Builder-Saver

// With​ ​the​ ​file​ ​builderSaver.html​,​ ​build​ ​a​ ​form​ ​with​ ​a​ ​single​ ​text​ ​input​ ​that,​ ​on​ ​submit, appends​ ​the​ ​input​ ​to​ ​a​ ​paragraph​ ​element.​ ​Save​ ​that​ ​paragraph​ ​with window.localStorage.setItem()​.​ ​When​ ​the​ ​page​ ​is​ ​refreshed,​ ​reload​ ​the paragraph​ ​with​ ​window.localStorage.getItem()​.


var blurbKey = 'allTheBlurb' 

//All these decide what will happen when the user presses the submit button.
var appendblurb = document.querySelector('#appendblurb'); 
//This selects the submit button on the page
appendblurb.addEventListener('click', function(event){ 
    //This is deciding the action of click of the submit button
    var input = document.querySelector('#blurb'); 
    //This selects the text in the text box.
    var allTheBlurb = document.querySelector('#alltheblurb'); //This selects the p tag 
    //This below takes the empty p tag element's innerText [#alltheblurb] and replaces it with the value or text inside of [input] for every time the user presses submit.
    allTheBlurb.innerText += ' ' + input.value; //.value is the text string that repopulates input in text box.

    window.localStorage.setItem(blurbKey, allTheBlurb.innerHTML); //This sets the key of the localStorage to be 'allTheBlurb' or var blurbKey and displays the innerHTML of the empty p tag that is also your input from 'allTheBlurb.innerHTML'. [SEE Application Tab in BROWSER CONSOLE]
    input.value = '';
    //localStorage​​ ​is​ ​almost​ ​a​ ​plain​ ​old-fashioned​ ​JavaScript​ ​object.​ ​All​ ​data​ ​is​ ​stored​ ​as key-value​ ​pairs,​ ​but​ ​is​ ​accessed​ ​through​ ​the​ ​getter​ ​and​ ​setter​ ​methods 
    //window.localStorage.setItem()​ ​takes​ ​a​ ​single​ ​argument​ ​--​ ​a​ ​key​ ​--​ ​and​ ​returns​ ​the​ ​value​ ​associated​ ​with that​ ​key.


});


//The following code is for when the person hits the clear button. 
var clearblurb = document.querySelector('#clearblurb'); 
clearblurb.addEventListener('click', function(event) {
    var input = document.querySelector('#blurb')
    var allTheBlurb = document.querySelector('#alltheblurb');
    input.value = '';
    //window.localStorage.setItem(blurbKey, '');
    window.localStorage.clear() //local storage sets the key and then clears it into nothing when someone refreshes the screen    
    allTheBlurb.innerText = '';   //in the paragraph element we are setting the text to blank 
});



//Theses two lines bellow are for when the user refreshes the page, the text that they have previously entered will still be there [from localStorage when we .setItem]. After they exit the browser, restart their computer and refresh the page it will still be there. 

var allTheBlurb = document.querySelector('#alltheblurb') 
allTheBlurb.innerText = window.localStorage.getItem(blurbKey); //This is taking the text from inside the localStorage we set the value to be 



