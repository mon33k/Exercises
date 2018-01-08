

const express = require('express') // import express
// const morgan = require('morgan')
const app = express() // create an express server
const port = 8000; // we will use this later

app.get('/', (req, res) => {
    res.send(`<h1>Choose Rock, Paper, or Scissors</h1>
    <p>enter either /rock /paper or /scissors</p>`)
}) // routes the '/' URL path to produce a response of 'Hello World!'

app.get('/:userChoice', (req, res) => {
    res.send(makeResultObj(req.params.userChoice, aiChoice()));

}) // appends to end of URL path to produce a JSON object of user, ai and result.



const aiChoice = () => {
    let ai = Math.floor(Math.random() * 3);
    switch (ai) {
        case 0:
            return "rock"
        break;
            
        case 1:
            return "paper"
        break;

        case 2:
            return "scissors"
        break;
    }
}


const makeResultObj = (userChoice, aiPick) => { //aiPick is going to be aiChoice()
    let obj = {};   
    switch (aiPick) {   //building the object
        case "rock":
           obj.aiPick = aiPick
           obj.userChoice = userChoice  
           if(userChoice === "rock") {
               obj.result = "tie"       //creating the variable and key of result
           } else if (userChoice === "paper") {
               obj.result = "win"
           } else if (userChoice === "scissors") {
               obj.result = "lose"
           }
        break;

        case "paper":
            obj.aiPick = aiPick
            obj.userChoice = userChoice
            if(userChoice === "rock") {
                obj.result = "win"       //creating the variable and key of result
            } else if (userChoice === "paper") {
                obj.result = "tie"
            } else if (userChoice === "scissors") {
                obj.result = "lose"
            }
        break;

        case "scissors":
            obj.aiPick = aiPick
            obj.userChoice = userChoice
            if(userChoice === "rock") {
                obj.result = "lose"       //creating the variable and key of result
            } else if (userChoice === "paper") {
                obj.result = "win"
            } else if (userChoice === "scissors") {
                obj.result = "tie"
            }
        break;
    }
    return obj;
}


    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    }) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
