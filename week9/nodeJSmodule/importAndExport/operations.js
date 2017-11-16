const slice = (arr, num) => {
    const endInd = arr.length + num;
    return arr.slice(0, endInd);
};

const rotate = (arr, num) => {
    for (var i = 0; i < num; i++) { //for num number of times, it will add one and remove one for every iteration in the for loop
        let popped = arr.pop()
        arr.unshift(popped);
    }
}; //only use positive integers for num!!!!!!

module.exports = {
    slice: slice,
    rotate: rotate
};

console.log(module.exports);