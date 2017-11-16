// Q6. map-triple-array

// Write a function that uses the map array method to triple every member of an array. The function should only take one argument, the array. The function should NOT use a loop.

const mapTripArr = (arr) => {
    return arr.map(elem => { 
        return elem * 3;
    })
}

console.log(mapTripArr([1, 2, 3, 4]));

