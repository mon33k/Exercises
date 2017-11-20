////////////////QUESTION 1///////////////
/* Question 1: Create an object to hold information on your favorite recipe. It should have the following properties: title, number of servings, and ingredients (an array). Create a function that logs the recipe information, so it looks like this:
name: Mole
servings: 2
ingredients: cinnamon,cumin,cocoa
 
Now change the function to log each ingredient on a separate line:
name: Mole
servings: 2
ingredients:
cinnamon
cumin
cocoa   */

// var recipe ={   
//         name: 'mole', 
//         servings: 2, 
//         ingredients: ['cinnamon', 'cumin', 'cocoa'],
//     };
// function list1 (recipe){
//     var name = 'name: ' + recipe.name;
//     var servings = 'servings: ' + recipe.servings;
//     var ingredient = 'ingredients: ';
//     for (var i = 0; i < recipe.ingredients.length; i++){   ///or recipe[ingredients].length calling array and the key in the array, you cannot use the dot notation on variables only keys in objects
//         if (i === recipe.ingredients.length - 1){           //if condition i index is at the last array element 
//             ingredient += recipe.ingredients[i];            //When we reach the end of the array then we want to just add last ingredientt and not a comma
//         }else{
//             ingredient += recipe.ingredients[i] + ', '         //adds to the var ingredients each index in object recipe from key ingredients, adds a comma so that it doesn't print as one word but a list
//         }
//     }
//     return name + '\n' + servings + '\n' + ingredient;
// }
// function list2 (recipe){
//     var name = 'name: ' + recipe.name;
//     var servings = 'servings: ' + recipe.servings;
//     var ingredient = 'ingredients: ';
//     for (var i = 0; i < recipe.ingredients.length; i++){   //This is the same loop as before but instead of needing to add to the back of the ingredients: list we need to add a new line each time
//             ingredient += '\n' + recipe.ingredients[i]        //adds a new line each time 
//     }
//     return name + '\n' + servings + '\n' + ingredient;
// }
// console.log(list2(recipe));         //Since we called list2 function list1 function is no longer doing anything unless we call it 

/////////Another way to do it//////////////////
// var favRecipe = {
//     title: "lasagna",
//     servings: 3,
//     ingredients: ["pasta", "sauce", "beef"]
// }

// var favRecipe = {
// title: "lasagna",
// numOfServings: 3,
// ingredients: ["pasta", "sauce", "beef"]
// }

// function logRecipe(favRecipe) {
// console.log('name: ' + favRecipe.title)
// console.log('servings: ' + favRecipe.numOfServings)
// console.log('ingredients: ' + '\n' + favRecipe.ingredients.join('\n'))
// }

// logRecipe(favRecipe);


//////////////QUESTION 2/////////////////////////////////////////////////////////////////////////////////
/* Question 2: Create a function prettyLog that logs a recipe information. A recipe is an object to that has the following properties: title, number of servings, and ingredients (an array). The output should look like this: (make sure there 

name: Mole
servings: 2
ingredients: cinnamon > cumin > cocoa */

// var recipe = {
//         name: 'Mole',
//         servings: 2,
//         ingredients: ['cinnamon', 'cumin', 'cocoa']
// }

// function prettyLog (recipe){
//     var namelog = 'name: ' + recipe.name;
//     var servingslog = 'servings: ' + recipe.servings;
//     var ingredientslog = 'ingredients: ' + recipe.ingredients.join(' > ')
//     return namelog + '\n' + servingslog + '\n' + ingredientslog;    
// }
// console.log(prettyLog(recipe))

///////////////QUESTION 3//////////////
/* Question 3: Write a function getProps that takes an object as an argument and returns all the keys of that object in an array.

var cat = {
  family: 'Felidae',
  genus: 'Felis',
  species: 'Catus' 
}

getProps(cat)
// will return ['family', 'genus', 'species']  */ 

// var cat = {
//     family: 'Felidae',
//     // 'family2': 'FELIDAE'        //strings can be keys also, when you access it it has to be cat['family2']
//     genus: 'Felis',
//     species: 'Catus'
// }
// function getProps (cat){
//     return [cat.family, cat.genus, cat.species]
// }
// console.log(getProps(cat));

////////////////QUESTION 4////////////////
/* Question 4: Write a function getObjLength that returns the length of an object. For this exercise, the length is the number of properties the object has.

var cat = {
  family: 'Felidae',
  genus: 'Felis',
  species: 'Catus' 
}

getObjLength(cat)
// will return 3              */ 

// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
//   }

//   function getObjLength (object){
//     var objectCounter = 0
//         for (var key in object){            //for each key in each object
//             objectCounter += 1              //if there is a key itll add 1 each time it loops to our counter         
//         }         
//       return objectCounter
//   }
//   console.log(getObjLength(cat))

/*Question 5: Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it. Create a function that iterates over the array and logs the title and director for each film. Like this:

Wonder Woman, directed by Patty Jenkins
Inception, directed by Chrisopher Nolan

Now Change the output depending on whether the film was watched. If it was watched, log a string like

You already watched "Wonder Woman" directed by Patty Jenkins
and if not, log

You still need to watch "Wonder Woman" by director Patty Jenkins.          */


// var filmsList = [
//     {
//         title: 'Toy Story',
//         director: 'Pixar',
//         watched: true

//     }, 
//     {
//         title: 'Interesting Movie',
//         director: 'Whoever',
//         watched: true
//     },
//     {   
//         title: 'Horror Movie',
//         director: 'Mr. Anyone',
//         watched: false
//     }
// ]
// function movieList (object){
//     var showTitle = '';
//     var showDirector = ''; 
//     var result = '';
//     for (var i = 0; i < object.length; i++){
//          showTitle = object[i].title;
//          showDirector = object[i].director;
//          result += '\n' + 'Title: ' + showTitle + ', Directed by: ' + showDirector;
//     }
    
//     return result;
// }

// function watchedMovie (object){
//     var showTitle = '';
//     var showDirector = ''; 
//     var result = '';
//     for (var i in object){
//         showTitle = object[i].title;
//         showDirector = object[i].director;

//          if(object[i].watched === true){
//              result += 'You already watched ' + showTitle + ', directed by ' + showDirector + '\n';     ///Put result to += so it keeps finding what youre looking for in loop 
//          }else{
//              result += 'You still need to watch ' + showTitle + ', directed by ' +  showDirector + '\n';
//          }

//     }
    
//     return result;
// }
// //console.log(movieList(filmsList));
// console.log(watchedMovie(filmsList));




/*Question 6: Let's put everything together by building a small todo list program. Here are the steps:

Decide what each todo task will look like: create a javascript object with at minimum the properties description and completed
1. Create a todos array to hold all todo objects.
2. Create a function that adds a todo to the todos array.
3. Create a function that shows all todos.
4. Create function that marks a todo as completed (based on the index number).      */

var toDoList = [
    {
        description: 'Throw out garbage',
        completed: true
    },
    {
        description: 'Buy groceries',
        completed: false
    },
    {  
        description: 'Do laundry',
        completed: true
    },
    {
        description: 'Cook dinner',
        completed: false
    }

]

function addToDoItems (object, newTask){
    return object.push(newTask);

}

function showsToDos (object){
    var result = '';
    for (var i in object){                      //object.join('\n'); this is an easier way to do it instead of making a for loop 
        result += object[i].description + '\n';           //Result is reiterated and each element/object in the array is made into a string with a new line each iteration, when it is a string you can't put the whole object you need to call a key in the object
    }
    return result;
}
console.log(showsToDos(toDoList));

function ifComplete (object){
    var result = '';
    for(var i in object){
        if(object[i].completed === true){
            result += object[i].description + ' is completed \n';
        }else{
            result += object[i].description+ ' is incomplete \n';
        }
    }
    return result;
}
console.log(ifComplete(toDoList))