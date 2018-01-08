var express = require('express');
var router = express.Router();

var db = require('../db/queries');


// DELETE http://localhost:3000/puppies/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  db.removePuppy(id)
    .then(function () {
      res.json({
        status: 'success',
        message: 'Removed a puppy'
      });
    })
    .catch(function (err) {
      return next(err);
    });
})


// PUT http://localhost:3000/puppies/:id
router.put('/:id', (req, res, next) => {
  const { name, breed, age, sex } = req.body
  const id = req.params.id;

  db.updatePuppy(id, name, breed, age, sex)
    .then(function () {
      res.json({
        status: 'success',
        data: req.body,
        message: 'Updated a puppy'
      });
    })
    .catch(function (err) {
      return next(err);
    });
})

// POST http://localhost:3000/puppies
router.post('/', (req, res, next) => {
  // ES6 Object destructuring assignment
  const { name, breed, age, sex } = req.body
  db.createPuppy(name, breed, age, sex)
    .then(function () {
      res.json({
        status: 'success',
        message: 'Add a puppy'
      });
    })
    .catch(function (err) {
      return next(err);
    });
})

// GET http://localhost:3000/puppies
router.get('/', (req, res, next) => {
  db.getAllPuppies()
    .then(function (data) {
      res.json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL puppies'
      });
    })
    .catch(function (err) {
      return next(err);
    });
});

//http://localhost:3000/puppies/name/Ben/breed/Doberman
router.get('/name/:name/breed/:breed', (req, res, next) => {
  // Using ES6 object destructuring
  const { name, breed } = req.params;
  /* The above is the same as:
    const name = req.params.name;
    const breed = req.params.breed;*/

  db.getPuppyByNameAndBreed(name, breed)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved One puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
})



// http://localhost:3000/puppies/name/Nick
router.get('/name/:name', (req, res, next) => {
  db.getPuppyByName(req.params.name)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved One puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
})

// http://localhost:3000/puppies/2
router.get('/:id', (req, res, next) => {
  db.getSinglePuppy(req.params.id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved One puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
})




module.exports = router;