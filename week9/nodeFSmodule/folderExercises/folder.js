//Github Exercises Link: https://github.com/C4Q/AC_4_Web/blob/master/units/deepdive/exercises/node_fs_module/node_fs_module.md

//Step 1: create a new folder called folder-1
// const fs = require('fs');
// for (let i = 1; i <= 100; i++) {
//     fs.mkdir('folder-'.concat(i), () => {

//         console.log('Created folder-'.concat(i))

//     });
// }

//Step 2: delete the folder that you just created, create 100 new folders, and named them folder-1, folder-2, folder-3, etc., all the way up to folder-100, change the name of all 100 folders to add the word 'new' to the beginning. For example, new-folder-1, new-folder-2, new-folder-3, etc.
// for (let i = 1; i <= 100; i++) {
//     fs.rename('folder-'.concat(i), 'new-folder-'.concat(i));
// }

//Step 3: delete all 100 folders
// for (let i = 1; i <= 100; i++) {
//     fs.rmdir('new-folder'.concat(i), (err, data) => {
//         if (err) {
//             console.log('Error!', err)
//         }
//         console.log('Deleted another new repo!')
//     });
// }

