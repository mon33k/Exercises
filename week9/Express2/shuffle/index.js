const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later

app.get('/draw/:number', (req, res) => {

  res.send(pickRandomCard(req.params.number));
})
  
const suit = ['clubs', 'diamonds', 'hearts', 'spades']
const value = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']


const pickRandomCard = (num) => {
  return num * {
      suit: suit[Math.floor(Math.random() * 4)],
      value: value[Math.floor(Math.random() * 13)]
  }
}

// const makeIMG = (suit, value) => {
//   let card = (suit[Math.floor(Math.random() * 4)]) + (value[Math.floor(Math.random() * 13)]) 
//   var image = `<img src="/cards/${card}.png">` 
  
//   return image;

// }




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
  