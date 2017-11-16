//Github Exercises Link: https://github.com/C4Q/AC_4_Web/blob/master/units/deepdive/exercises/node_fs_module/node_fs_module.md

//Step 1: create a new file called lyrics-1.txt, 
//choose any song and look up the lyrics. write the first two lines of the lyrics into the lyrics-1.txt file
// const fs = require('fs');
// var lyrics1 = `Island woman rise, walang makakatigil
// // Brown, brown woman, rise, alamin ang yung ugat`
// // fs.writeFile('lyrics-1', lyrics1, (err, data) => {
// //     if(err){
// //         throw err
// //     }
// // })

// //Step 2: read the contents from lyrics-1.txt and log the contents to the console
// // fs.readFile('lyrics-1.txt', 'utf8', (err, data) => {  //utf8 makes it easier for humans to read instead of converting the data to a string
// //     if(err) {
// //         console.log(`error: ${err}`)        
// //     }
// //         console.log(data)       
// // });

// //Step 3: create a new file called lyrics-2.txt, write the next two lines of the song into the lyrics-2.txt file.
// var lyrics2 = `hey got nothin’ on us (aye!), Nothin’ on us (aye!)`
// // fs.writeFile('lyrics-2.txt', lyrics2, (err) => {  //Added the next two lines in lyrics-2.txt
// //     if(err) {
// //         throw err;
// //     }
// //         console.log("The file has been saved")
// // })

// //Step 4: read the contents from both lyrics-1.txt and lyrics-2.txt and log both to the console
// let lyrics ='';
// fs.readFile('lyrics-1.txt', 'utf8', (err, data) => {
//     lyrics += data;     
// });

// fs.readFile('lyrics-2.txt', 'utf8', (err, data) => {
//     lyrics += data;     
// });

// //Step 5: create a new file called lyrics-3.txt and write the contents from both lyrics-1.txt and lyrics-2.txt into lyrics-3.txt
// fs.writeFile('lyrics-3.txt', lyrics, `lyrics.js`, (err) => {
//     if (err) {
//         throw err;
//     }
//         console.log("The file has been saved!");
// });

