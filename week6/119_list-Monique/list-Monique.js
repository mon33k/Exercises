document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        var li = document.createElement('LI')
        li.innerText = "X: " + event.clientX + ', Y: ' + event.clientY
        document.querySelector('#list').appendChild(li)


    })
    document.querySelector('#clearBtn').addEventListener('click', function(event) {
        document.querySelector('#list').innerHTML = ''
        event.stopPropagation(); //Stops the clear btn from also being recognized as input even after we click clear
    })
})
