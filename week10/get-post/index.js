const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello there')
})

const fs = require('fs')

app.post('/moods', (req, res) => {
    if (!req.body.name || !req.body.mood) {
        return res.send('please specify a name and mood')   //if it can't find properties of req body send this response, 
        //return is get out of the post request
    }
        // console.log(req.body)
        //res.json(req.body) //cant send response twice in express 
        // res.send(JSON.stringify(req.body))
        // const nameAndMood = req.body.name + ' ' + req.body.mood;
        // console.log('nameAndMood: ', nameAndMood)
        // fs.appendFile('moods.json', JSON.stringify(req.body) + '\n', (err) => { //stringify takes any data type and turns it into a string
        //     //turns JSON into string to allow you to append or store into a new file. IF you want to take something out of a JSON file then use parse
        //     if (err) throw err;
        //     console.log('appended to file');
        //     res.send('success')     
        //     fs.readFile("moods.json", (err, data) => {  //Will read everything inside the JSON
        //         if(err) throw err
        //         console.log(JSON.parse(data))
        //     })       
        // })
        var read = 'hello world';
        fs.readFile("moods.json", (err, data) => {  //Will read everything inside the JSON
            if (err) throw err
            read = JSON.parse(data) //JSON.parse converts info to readable stuff
            
            read.push(req.body);    //pushing the new object
            read = JSON.stringify(read);
            fs.writeFile('moods.json', read + '\n', (err) => {  //This is adding to the arr of objects
                if(err) throw err
                console.log("appended win")
            })
        }) 

        // app.get('/', (req, ))
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})