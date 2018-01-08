const express = require('express');
const app = express();
const path = require('path')

// Set express to use pug as the view engine
app.set('views', path.join(__dirname, 'views')); //Using pug to set the path to views 
app.set('view engine', 'pug');  //uses pug 

const port = 3000;

app.get('/', (req, res) => {
  res.render('hello', { name: 'Nick' })
})

// const puppy = {
//     id: 1, 
//     name: "Tyler", 
//     breed: "Retriever",
//     sex: "M",
//     age: 3
// }


//if you put a name it will display hello name
app.get('/:name', (req, res) => {
    //res.render('filenameAsAStr', {Whatever you want to pass in it})
    res.render('hello', { name: req.params.name })

})

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})

