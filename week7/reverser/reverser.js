/*Using the files reverser.html and reverser.js, build a page with a form that includes one input field, a submit button, and a paragraph element with the text: "Please type something". When the user submits the form, the text of the paragraph element should change to be the reverse of the string. HINT: Use .split('').reverse().join('').

You'll need to use .preventDefault() to prevent the page from refreshing when the user submits the form.

Also, the "submit" button should have the text "Reverse" instead of "Submit". */

let btn = document.querySelector('#btn')

btn.addEventListener("click", function(event) {
    event.preventDefault()
    let input = document.querySelector('#input').value
    let p = document.querySelector('p')

    var reverse = input.split('').reverse().join('');
    p.innerHTML = reverse;
});

//submit button reverse text of text 