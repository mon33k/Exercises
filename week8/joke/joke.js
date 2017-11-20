function reqListener() {
  console.log(this);
  var joke = JSON.parse(this.responseText)  //When the response is received and loaded display its function
  document.querySelector('#setup').innerText = joke.setup
  setTimeout(function () {
    document.querySelector('#punchLine').innerText = joke.punchline
    //We are given a string and when we use JSON.parse we are turning it into an object
    console.log(this.responseText);
    //responseText is a key 
  }, 1500)
}

document.addEventListener('DOMContentLoaded', function () { //DOMContentLoaded loads the entire HTML file 
  var newJoke = document.querySelector('#njbtn');
  newJoke.addEventListener("click", function () {

    var oReq = new XMLHttpRequest(); //this is going to be a get request
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
    oReq.send(); //called a method on it on this object that takes all that we set up and make the request, once response is loaded it called this function 

  });
});



  //oReq is the object, when we add the event listener we go into the key value responseText to display it's value using dot notation this.responseText

  //--------Peter's code from code share--------//

  // var joke;
  // var lastTimer;
  
  // function showPunchLine() {
  //   if (joke) {
  //     document.querySelector('#punchline').innerText = joke.punchline
  //     document.querySelector('#anotherone').innerText = 'Make joke!';
  //     joke = undefined
  //     clearTimeout(lastTimer)
  //   }
  // }
  
  // function reqListener () {
  //   joke = JSON.parse(this.responseText)
  //   document.querySelector('#setup').innerText = joke.setup
  //   document.querySelector('#punchline').innerText = ''; 
  //   document.querySelector('#anotherone').innerText = 'I don\'t know.';
  //   lastTimer = setTimeout(showPunchLine, 7000)
  // }
  
  // document.addEventListener('DOMContentLoaded', function() {
  //   document.querySelector('#anotherone').addEventListener('click', function() {
  //     if (joke) {
  //       showPunchLine()
  //     } else {
  //       var oReq = new XMLHttpRequest();
  //       oReq.addEventListener("load", reqListener);
  //       oReq.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
  //       oReq.send();
  //     }
  //   })
  // })
  