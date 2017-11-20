

var list = document.querySelector('ol');
document.addEventListener('click', function(event) {    //This executes when clicked 
    console.log(event.target.tagName)   //this shows that when you click on any element you will see in the browser console that all the tags are turned into uppercase tags
    //ttt
    
    if (event.target.tagName.toUppercase() === 'LI') {  //Chrome makes html tags into uppercase, but android may use lowercase tags, by setting it to a default in uppercase it allows for the webpage to run on all platforms and all li tags to work. 
        var n = document.createElement('LI');
        n.innerHTML = event.target.innerHTML;
        list.appendChild(n);
    }
});

