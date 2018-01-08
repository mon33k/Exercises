const pgp = require('pg-promise')({});

const db = pgp("postgres://localhost/puppies");


function removePuppy(id) {
  return db.none(`DELETE FROM pups WHERE id=$1`, [id])
}

function createPuppy(name, breed, age, sex) {
  return db.none(`INSERT INTO pups 
                  (name, breed, age, sex)
                  values($1, $2, $3, $4)`,
    [name, breed, age, sex]
  )
}

function updatePuppy(id, name, breed, age, sex) {
  return db.none(`UPDATE pups
                  SET name=$2, breed=$3, age=$4, sex=$5
                  WHERE id=$1`,
    [id, name, breed, age, sex])
}

function getAllPuppies() {
  return db.any('select * from pups');
}

function getSinglePuppy(id) {
  return db.one(`select * from pups where id=$1`, [id]);
}

function getPuppyByName(name) {
  return db.one(`select * from pups where name=$1`, [name]);
}

function getPuppyByNameAndBreed(name, breed) {
  return db.one(`SELECT * FROM pups WHERE name=$1 AND breed=$2`, [name, breed]);
}

module.exports = {
  getAllPuppies,
  getSinglePuppy,
  getPuppyByName,
  getPuppyByNameAndBreed,
  createPuppy,
  updatePuppy,
  removePuppy
};