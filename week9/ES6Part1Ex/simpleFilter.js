// Q2. simple-filter

// Write a function called greaterThan10 that uses the filter method to filter an array and only return numbers that are greater than 10. The function should take an array of numbers as an argument.

// Examples:

// greaterThan10([1, 2, 3, 11, 12, 13]); //returns [11,12,13]
// greaterThan10([11, 2, 3, 1, 22, 4, 33]); //returns [11,22,33]

const greaterThan10 = (arr) => {
    arr.filter(elem => {
        switch(true) {
            case elem > 10:
                console.log(elem)
            break;
        }
    })
}

greaterThan10([10, 9, 30, 29, 2, 1, 3])