const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()


app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const fs = require('fs')
const counterFile = "counter.json"

//'utf8' is When using readFile in node it reads it as a text file, instead of numbers 
//JSON.stringify is for JSON files specifically for javascript
//JSON.parse will convert it to javascript
app.get('/', (req, res) => {  //When you do a get request you want specific info back from the JSON file 
    fs.readFile('counter.json', 'utf8', (err, data) => {
        if (err && err.code === 'ENOENT') { //inside the err nested inside the err.code look for 'ENOENT' which means file does not exist
            fs.writeFile("counter.json", {"count": "1"}) //and writes it back into the json            
            return res.send('There is no file') //the file doesn't exist but you make it using writeFile you go back again a
        }
        let count = JSON.parse(data)
        console.log(count)
        let keyCount = Number(count.count) + 1;
        fs.writeFile(counterFile, JSON.stringify({"count":keyCount}))
        res.send(`Welcome to my site`)   //displays it back into the console
    })
})


app.post('/reset', function (req, res) {   //put info INTO the json object 

    fs.writeFile(counterFile, JSON.stringify({"count": "0"}))   //Just writing the info to be reset to 0 in the counterFile, stringify so it's readable

    res.send('You reset the counter')
        
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
