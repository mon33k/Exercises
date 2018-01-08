const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()
const fs = require('fs')

app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//'utf8' is When reading a file in node it reads it as a text file, instead of numbers 'utf8' used ususally for readFile
//JSON.stringify is for JSON files specifically for javascript
//JSON.parse will convert it to javascript
app.get('/number', (req, res) => {  //When you do a get request you wnat specific info back from the JSON file 
    // const num = req.body.number    
    fs.readFile('number.json', 'utf8', (err, data) => {
        if (err && err.code === 'ENOENT') {     // look into this
            return res.send('There is no such file', err)
        }
        res.send(`The number is: ${JSON.parse(data).number}`)
    })
})


const numberFile = "number.json"

const writeFile = (filename, data, res) => {
    fs.writeFile(numberFile, data, (err) => {
        if (err) {
            return res.send(err)
        }
        res.send('success')
    })
}

app.post('/number', function (req, res) {   //put info INTO the json object 
    // const num = req.body.number; 

    if (!req.body.number) {       //only have one value pair
        res.send('please specify a number');
        return;
    }


    fs.readFile(numberFile, 'utf8', (err, data) => {
        const jsonArr = JSON.stringify([req.body]) //send the whole obj key with value pairs instead of just the number
        
        if (err) {
            // if the json file does not exist
            if (err.code === 'ENOENT') {
                // converting array to json
                // writing to file
                return writeFile(numberFile, jsonArr, res)
            }
            return res.send(err)

        }
        // parsing json file to javascript array
        const arr = JSON.parse(data)
        // adding request body to the array
        arr.push(req.body)
        // converting back to JSON
        const jsonArr2 = JSON.stringify(arr)
        //saving to file
        writeFile(numberFile, jsonArr2, res)
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

