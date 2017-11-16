// Q8. first-letter-uppercase-map

// Write a function that takes a string as a parameter and converts the first letter of each word of the string to upper case. However, do not use a for loop, while loop, or forEach.

// Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox'

const firstLetterUpper = (str) => {
    return str 
        .split(' ')
        .map(elem => elem[0].toUpperCase() + elem.slice(1))
        .join(' ');
}

console.log(firstLetterUpper('the quick brown fox'));
