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

const usersFile = "users.json"
const givenJSON = `[
    {"username" : "adam", "password":"123"},
    {"username" : "josh", "password": "asd"},
    {"username" : "cat", "password": "dog"}
  ]`    //JSON is one big ass string

app.post('/login/:username/:password', (req, res) => {  //When you do a get request you want specific info back from the JSON file 
    fs.readFile(usersFile, 'utf8', (err, data) => {
        if (err && err.code === 'ENOENT') { //inside the err nested inside the err.code look for 'ENOENT' which means file does not exist
            fs.writeFile("users.json", givenJSON) //and writes it back into the json            
            return res.send('There is no file') //the file doesn't exist but you make it using writeFile you go back again a
        }

        var parsedData = JSON.parse(data)

        for(var i = 0; i < parsedData.length; i++) {
            let userName = parsedData[i].username 
            let password = parsedData[i].password
            if(req.params.username === userName){
                if(req.params.password === password){
                    return res.send(`You're In!`)
                }   
            }
    
        }
        return res.send(`Invalid username/password`) //displays it back into the console
    })
})


const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})


