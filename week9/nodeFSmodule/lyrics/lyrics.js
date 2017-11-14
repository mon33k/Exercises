const fs = require('fs');

// fs.readFile('lyrics-1.txt', 'utf8', function(err, data) {  //utf8 makes it easier for humans to read instead of converting the data to a string
//     if(err) {
//         console.log(`error: ${err}`)        
//     }
//         console.log(data)       
// });

// fs.writeFile('lyrics-2.txt', `They got nothin’ on us (aye!)  //Added the next two lines in lyrics-2.txt
// Nothin’ on us (aye!)`, (err) => {
//     if(err) {
//         throw err;
//     }
//         console.log("The file has been saved")
// })

fs.readFile('lyrics-1.txt', 'utf8', function(err, data) {
    if(err) {
        console.log(`error: ${err}`)        
    }
        const lyrics1 = console.log(data)       
});

fs.readFile('lyrics-2.txt', 'utf8', function(err, data) {
    if(err) {
        console.log(`error: ${err}`)        
    }
        const lyrics2 = console.log(data)       
});

fs.writeFile('lyrics-3.txt', `${lyrics1}, ${lyrics2}, lyrics.js`, (err) => {
    if (err) {
        throw err;
    }
        console.log("The file has been saved!");
});
