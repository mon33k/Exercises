DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO pups (name, breed, age, sex)
  VALUES ('Tyler', 'Retrieved', 3, 'M'),
         ('Nick', 'Shiba Inu', 2, 'M'),
         ('Dash', 'Shihtzu', 2, 'M'),
         ('Michelle', 'Bulldog', 2, 'F'),
         ('Helen', 'German Shepherd', 2, 'F'),
         ('Princess', 'Golden Retriever', 2, 'F'),
         ('Ben', 'Doberman', 30, 'M'),
         ('Ryan', 'Tibetan Mastiff', 30, 'M'),
         ('Greg', 'Chihuahua', 2, 'M'),
         ('Lev', 'Golden Retriever', 2, 'M'),
         ('Charlie', 'Pomeranian', 14, 'M');