// Using the files echo-er.html and echo-er.js, build a page with an h1 element. [DONE] Every time the user presses a key, the innerText of the h1 element should change to show what key was pressed.
var header = document.querySelector("h1")

document.addEventListener('keypress', function (event) {
    if (!event.ctrlKey) {
        header.innerHTML += event.key;
        if (event.key >= 'A' && event.key <= 'Z' && event.key.length === 1) {

        //if(/^[A-Z]$/.test(event.key)) {
            header.style.textDecoration = 'underline';
        } else if ('.?!'.includes(event.key)) {
            header.style.textDecoration = 'none';
        }
    }




});

// Link a file echo-er.css to give the page a rebeccapurple background, center the h1 element, and place the h1 element 100px from the top of the page.[DONE]

// Continuing with the files echo-er.html, echo-er.js, and echo-er.css add a text-decoration: underline property to the h1 element when the user types a capital letter, and remove it when the user types a period, question mark, or exclamation point.

// Now, when the user presses a key, the value should be appended to the innerText of the h1 element (instead of replacing innerText with the new key).

