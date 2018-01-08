const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later

app.get('/:op/:num1/:num2', (req, res) => {
  // let num1 = req.params.num1;
  // let num2 = req.params.num2;
  // let op = req.params.op;

  // req.params.num2
  res.send(makeAPI(req.params.op, req.params.num1, req.params.num2));
})

const getResult = (op, num1, num2) => {
  let n1 = parseInt(num1);  //Never use the same variable names as the params 
  let n2 = parseInt(num2);
  switch(op) {
    case 'add':
      return n1 + n2;
      break;
    case 'min':
      return n1 - n2;
      break;
    case 'mul':
      return n1 * n2;
      break;
    case 'div':
      return n1 / n2;
      break;
  }
}

const makeAPI = (op, num1, num2) => {
  let obj = {'num1': num1, 'num2': num2, 'result': getResult(op, num1, num2)};
  return obj;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
