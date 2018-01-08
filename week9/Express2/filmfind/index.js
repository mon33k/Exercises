const express = require('express') // import express
const app = express() // create an express server
const port = 8000; // we will use this later
const movies = require('./movies.json');

// app.get('/:genre/:genre', (req, res) => {
//     console.log(req.params) //-> {genre: 'comedy', year: '2017'} req.params returns an object
//     res.send(getGenre(req.params.genre));
// })

// app.get('/title/:title', (req, res) => {
//     res.send(getTitle(req.params.title));
// })

// app.get('/year/:year', (req, res) => {
//     res.send(getYear(req.params.year));
// })

app.get('/:genre/:year/:title', (req, res) => {
    res.send(getGenreYearTitle(req.params.genre, req.params.year, req.params.title))
})

const getGenreYearTitle = (str, num, str2) => {
    return movies.filter(function(movie) {
        if(movie.genre === str) {
            if (movie.year === Number(num)) {
                if (movie.title.includes(str2)) {
                    return true;
                }
            } 
        } 
    })
}

// const getTitle = (str) => {
//     return movies.filter(function(movie) {
//         if(movie.title.includes(str)) {
//             return true;
//         }
//     })
// }

// const getYear = (str) => {
//     return movies.filter(function(movie) {
//         if(movie.year === Number(str)) {
//             return true;
//         }
//     })
// }

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
