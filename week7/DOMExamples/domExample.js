//change background color 

var body = document.querySelector('body');
body.style.backgroundColor = 'purple';

//Highlight text

var arr = document.querySelectorAll('p.highlight')

arr.forEach(function(elem) {
    elem.style.backgroundColor = "red"
})

//Another way to highlight
function highlightAll (arr) {
for (var i = 0; i < arr.length; i++) {
    arr[i].style.backgroundColor = 'yellow'
}
}
highlightAll(arr)

