const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later

app.get('/:num/:base', (req, res) => {
  let biggerobj = {
      original:makeOrigObj(req.params.num, req.params.base), 
      conversions:makeConverObj(req.params.num, req.params.base)
    };
  // Assigned original and conversions as keys for the values makeOrigObj and makeConverObj
  res.send(biggerobj);
})

const makeOrigObj = (value, base) => {
    let original = {};
    
    switch (base) {
        case "bin":
            original.value = value;   //building obj "value":"num" 
            original.base = 2;     //building obj "base":"10"
        break;

        case "dec":
            original.value = value;    
            original.base = 10;    
        break;

        case "hex": 
            original.value = value;   
            original.base = 16;     
        break;
    }
    return original;
}

const makeConverObj = (value, base) => { //you can have same params for diff functions
    let conversions = {};
    switch (base) {
        // 
        case "dec":
            conversions.decimal = value   //Creating the key decimal inside the conversion obj and assigning num to it 
            conversions.binary = value.toString(2);
            conversions.hex = value.toString(16);
        break;

        case "bin":
            conversions.decimal = parseInt(value, 2);
            conversions.binary = value
            conversions.hex = conversions.decimal.toString(16);            
        break;

        case "hex": 
            conversions.decimal = parseInt(value, 16);
            conversions.binary = conversions.decimal.toString(2);            
            conversions.hex = value
        break;
    }
    return conversions;
}





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  }) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
  