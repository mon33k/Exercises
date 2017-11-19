

const express = require('express') // import express
// const morgan = require('morgan')
const app = express() // create an express server
const port = 8000; // we will use this later

app.get('/', (req, res) => {
    res.send(`<h1>Choose Rock, Paper, or Scissors</h1>
    <p>enter either /rock /paper or /scissors</p>`)
}) // routes the '/' URL path to produce a response of 'Hello World!'

app.get('/rock', (req, res) => {
    res.send({ "user": user[0], "ai": aiRandom(ai), "result": result(aiChoice) })

}) //

app.get('/paper', (req, res) => {
    res.send({ "user": user[1], "ai": aiRandom(ai), "result": result(aiChoice) })
}) //

app.get('/scissors', (req, res) => {
    res.send({ "user": user[2], "ai": aiRandom(ai), "result": result(aiChoice) })
}) //

let ai = Math.floor(Math.random() * 3);
const aiRandom = (ai) => {
    let choice = ["rock", "paper", "scissors"]
    let aiRes;
    let i = 0;
    while (i < choice.length) {
        switch (true) {
            case i === 0 && ai === 0:
                aiRes = "rock";
                break;

            case i === 1 && ai === 1:
                aiRes = "paper";
                break;

            case i === 2 && ai === 2:
                aiRes = "scissors";
                break;
        }
        i++
        return aiRes;
    }
}

const aiChoice = aiRandom();
let user = ["rock", "paper", "scissors"]
const result = (cb) => {
    let userRes;
        switch (elem) {
            case "rock":
                if (aiChoice === "rock") {
                    userRes = "tie";
                } else if (aiChoice === "paper") {
                    userRes = "lose";
                } else if (aiChoice === "scissors") {
                    userRes = "win";
                }
                break;

            case "paper":
                if (aiChoice === "rock") {
                    userRes = "win";
                } else if (aiChoice === "paper") {
                    userRes = "tie";
                } else if (aiChoice === "scissors") {
                    userRes = "lose";
                }
                break;

            case "scissors":
                if (aiChoice === "rock") {
                    userRes = "lose";
                } else if (aiChoice === "paper") {
                    userRes = "win";
                } else if (aiChoice === "scissors") {
                    userRes = "tie";
                }
                break;
        }
    })
    return userRes;    
}
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    }) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
