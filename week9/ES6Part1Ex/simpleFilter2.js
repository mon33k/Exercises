// Q3. simple-filter-2

// Write a function called filterEvens that uses the filter method to filter an array and only return the even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// Examples:

// filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
// filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]

const filterEvens = (arr) => {
    let newArr = [];
    arr.filter(elem => {
        switch(true) {
            case elem % 2 === 0:
                newArr.push(elem)
            break;
        }
    })
    console.log(newArr);
}

filterEvens([10, 9, 30, 29, 2, 4, 3])