//Github link: https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/map_filter_reduce/map_filter_reduce.md

//Lev's example 
Array.prototype.map = function(func) {
    var results = [];
    for (var i = 0; i < this.length; i++){
        results.push(func(this[i]));
    }

    return results;
};

var arr = [1, 2, 3]
var arr2 = arr.map(function(num){
    return num + 1
})
//Create an array `arr3` using `map` that has all elements of `arr` doubled. I.e. `arr3 === [2, 4, 6]`
var arr3 = arr.map(function(num){
    return num + num 
})

console.log(arr2)
console.log(arr3)


////////////////Another problem Lev posted/////////////////////
Array.prototype.map = function(func) {
    var results = [];
    // for (var i = 0; i < this.length; i++){
    //     results.push(func(this[i]));
    // }
    this.forEach(function(elem){
        var results = [];
        for (var i = 0; i < this.length; i++){
            results.push(func(this.i)               //////WRONG GET THE RIGHT CODE 
        }
    })

    return results;
};
var arr1 = ['cat', 'dog', 'moose']
var arr3 = arr1.map(function(ele){
    return ele + 's'
})
console.log(arr3)

/////////////////////////// Film Example ////////////////////////

var films = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
],

idAndTitlePairs = [];

films.forEach(function(film) {
    idAndTitlePairs.push({ id: film.id, title: film.title });
});