//Using the files clicker.html and clicker.js, build a blank web page with only a body element. (Of course you may still import your script.) If the user clicks on the left half of the page, use .style.backgroundColor to change the page's color to mediumaquamarine. If the user clicks on the right half of the page, change the page's color to peachpuff. HINT: Use window.innerHeight and window.innerWidth.

var middle =  window.innerWidth / 2;

  var body = document.querySelector('body')
  body.addEventListener('click', function(event) {
      console.log(event);
    var xCoordinate = event.clientX;

    console.log(middle, "this is the middle clicked the middle");
    console.log("you clicked here", xCoordinate);
    if(xCoordinate < middle) {
        body.style.backgroundColor = "mediumaquamarine";
    } else {
        body.style.backgroundColor = "peachpuff";
    }

  });
