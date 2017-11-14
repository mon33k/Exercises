const fs = require('fs');

// function readFile(fileName, callback) {
//     //if there is an error
//     //when trying to read the file
//     callback('error');
//     //if the file was read successfully
//     callback(null, data)    //The first thing is always null or error message, data will always be the second 
// }

// fs.readFile('words.txt', 'utf8', function(err, data) {  //utf8 makes it easier for humans to read instead of converting the data to a string
//     if(err) { throw err; }
//         console.log(`The file has been saved`)        
// });

// fs.readFile('words.txt', 'Hello Node.js', function(err, data) {      //don't know what this does
//     if(err) {
//         console.log(`error: ${err}`)        
//     }
//     console.log(data) //`toString(data: ${data})`
// });

// //A way to read all the files in the current folder, current folder is a '.' or you can put a specific file like 'message.txt'
// fs.readdir('.', (err, data) => {    
//     if(err) {
//       console.log('Error!', err);
//     }
//     console.log(data);
//   });


  fs.watch('words.txt', (eventType, filename) => {  //Watches the changes you make to your file and logs "change in words.txt"
    console.log(eventType + ' in ' + filename);
  })


  fs.writeFile('words.txt', 'first message', (err) => { //
    if (err) { throw err; }

    console.log('The file has been saved!');
  });


  fs.writeFile('words.txt', 'this is the first message I wrote to a file using Node.', (err) => {
    if (err) {
        throw err
    } else {
        console.log('The file was saved successfully')
    }
})

