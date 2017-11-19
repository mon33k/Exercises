
const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later

app.get('/', (req, res) => {
    res.send(`<h1>Choose Rock, Paper, or Scissors</h1>
    <p>enter either /rock /paper or /scissors</p>`)
}) // routes the '/' URL path to produce a response 

app.get('/add  ', (req, res) => {
    res.send()

}) //


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
