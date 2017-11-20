//https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/constructor_functions/constructor_functions.md


//This is the old way that we know how to use objects
// function createDog(name, breed){
//     var dog = {
//         name: name,
//         breed: breed
//     }
//     return dog;
// }

// var pluto = createDog('Pluto', 'Labrador')


// //New way of doing functions 
// function Dog(name, breed, weight) {
//     //this = {}
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     //return this
// }
// var charlie = new Dog("Charlie", "Mixed", 38) //using new (constructor function) is not the same as calling the function
// console.log(charlie.name)
// console.log(charlie.weight)

// var charlie = new Dog("Charlie", "Mixed", 38);
// var sergeant = new Dog("Sergeant", "Newfoundland", 140);
// var alice = new Dog("Alice", "Golden Retriever", 60);



// function Dog(name, breed, weight) {
//     //this = {}
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     //return this
// }
// console.log(Dog.name) //Every function has properties in addition to calling the function we can also access it's properties. 
// console.log(add1.name) //would return add1

// //For functions to work we need to be able to call it if not what's the point will give an error message-- just this point was made next lines will be irrelevant to the next 
// var obj = {name: "Charlie"}
// obj()       

// //The prototype property is an empty object, Every function has a prototype property that is an empty object
// function add1(num){
//     return num + 1;
// }
// console.log(add1.prototype)

// //////Another example
// function Rabbit() {

// }
// console.log(Rabbit.prototype)   //Will log an empty object
// console.log(Rabbit.prototype.constructor)   //will log 
// => true
/* default prototype that we can't see
Rabbit.prototype = { constructor: Rabbit };
*/


//refer to this constructor map in git hub doc 
// function Rabbit() {
//     this.type = type;
// }
// Rabbit.prototype.speak = function(){
//     console.log("hello")
// }
// var killerRabbit = new Rabbit("killer");

// killerRabbit.speak = function(){
//     caonsole.log("I am a rabbit")
// }
// var killerRabbit = new Rabbit ("Killer");
// var blackRabbit = new Rabbit ("black");



// var kr = {
//     type: 'killer'
// }
//     console.log(Rabbit.prototype)
// //Rabbit has a prototype that is an object that object has a constructor property that points back to a function whenever we create a 

// "If you add [a property] to the parent, the children will all get their own. "

// function Rabbit(type, name) {
//     this.type = type;
//     this.name = name;
// }

// Rabbit.prototype.speak = function(line) {
//     console.log("The " + this.type + " rabbit " +
//                 this.name + " says '" + line + "'");
// };

// var killerRabbit = new Rabbit("killer", "George");
// console.log(killerRabbit instanceof Rabbit)

/* EXERCISE QUESTION: 
-1) Write a constructor Vector that represents a vector in two-dimensional space. 
-2) It takes two number arguments: x and y parameters, which it should save to properties of the same name. 
3) Give the Vector prototype two methods, plus and minus, that take another vector as an argument and returns a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values. 
4) Add a method getLength to the prototype that computes the length of the vector ;that is, the distance of the point (x, y) from the origin (0, 0).

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5   

FORMULA FOR DISTANCE OF TWO POINTS 
distance between v1 = (x1, y1) and  v2 = (x2, y2)
Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

*/

////////My Answer///////////
function Vector( x, y )
{
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function ( other )
{
  var newVector = new Vector( this.x + other.x, this.y + other.y );
  return newVector;
};
Vector.prototype.minus = function( other )
{
  var newVector = new Vector( this.x - other.x, this.y - other.y );
  return newVector;
};

Vector.prototype.length = function ( other ) {
    var length = Math.sqrt((Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2)));
    return length;
}

console.log( new Vector(1, 2).plus( new Vector(1, 2)));
console.log( new Vector(3, 4).length( new Vector(2, 2)));






///////////Michelle's version/////////////////////
// function Vector(x, y) {
//     this.x = x
//     this.y = y
// }

// Vector.prototype.plus = function(vec) {
//     var newVec = new Vector(this.x + vec.x, this.y + vec.y)
//     return newVec
// }

// Vector.prototype.minus = function(vec) {
//     var newVec = new Vector(this.x - vec.x, this.y - vec.y)
//     return newVec
// }

// Vector.prototype.length = function(vec) {
//     return Math.sqrt(Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2))
// }

// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// var v3 = new Vector(3, 4)
// console.log(v1.plus(v2))
// console.log(v1.minus(v2))
// console.log(v1.length(v2))


