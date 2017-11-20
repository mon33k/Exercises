//Highlight only certain things like every other element in the li tags

var arr = document.querySelectorAll('li')

arr.forEach(function(elem, index) {
    if(index % 2 === 0) {
        elem.style.backgroundColor = "purple";
    }
})

//Using element.classList
document.querySelector("li").classList.add("special")

.highlight {
    backgound-color: blue;
}
.special {
    
}