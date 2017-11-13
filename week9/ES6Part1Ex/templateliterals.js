// Write a function called makeStory that uses the following excerpt:

// Remember, go straight to Grandma's house," _'s mother cautioned.  "Don't dawdle along the way and please don't talk to strangers!  The woods are dangerous."

// "Don't worry, mommy," said _, "I'll be careful.
// The function takes a string name as an argument, and returns a new string that contains the above excerpt, except that every instance of the underscore is replaced with name. Use an arrow function and template literals.

// Example:

// littleRed('Lev')
// => "Remember, go straight to Grandma's house," Lev's mother cautioned.  "Don't dawdle along the way and please don't talk to strangers!  The woods are dangerous."

// "Don't worry, mommy," said Lev, "I'll be careful."
//


function makeStory (name) {
    return `Remember, go straight to Grandma's house, ${name}'s mother cautioned. Don't dawdle along the way and please don't talk to strangers! The woods are dangerous.`
    
};

console.log(makeStory("Monique"));