
document.addEventListener("DOMContentLoaded", function (event) {
    let list = document.querySelector('#lister');
    let form = document.getElementById('userInput');

    document.addEventListener('submit', function (event) {
        event.preventDefault();

        let input = form.value;

        var listItem = document.createElement('li') //Creates Li element
        listItem.innerText = input;
        list.appendChild(listItem)  //Appends Li to Ol 
        // console.log("list item", listItem);
        input = '';
    })
    lister.addEventListener("click", function (event) {
        let target = event.target
        if (target.tagName.toUpperCase() == 'LI') {
            target.style.textDecoration = target.style.textDecoration !== 'line-through' ? 'line-through' : 'none'
        } else {

        }
    })
    let clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener("click", function (event) {
        var doneListItem = document.querySelectorAll('#lister li')
        console.log("done list item", doneListItem)
        for (var i = 0; i < doneListItem.length; i++) {
            if (doneListItem[i].style.textDecoration === 'line-through') {
                list.removeChild(doneListItem[i])
            }

        }
    });

});

//-------Lev's code----------//

// var todos = []

// /**
//  * @function addListItem
//  * @param  {string} description
//  * Inserts a new <li> element to the page
//  */
// function addListItem(description) {
//     console.log('adding input: ', description)
//     // if description is not an empty string
//     if (description) {
//         // getting the todos <ul> element from the page        
//         let list = document.querySelector("#todos");
//         // Creating a new <li> element
//         let newItem = document.createElement("li");
//         // Setting the text of the <li> to the todo description
//         newItem.innerText = description
//         // Appending the new <li> to the todos <ul> element
//         list.appendChild(newItem)
//     }
// }

// var listItems = document.querySelector("#todos");
// listItems.addEventListener("click", function (event) {
//     let target = event.target
//     if (target.tagName.toUpperCase() == 'LI') {
//         target.style.textDecoration = target.style.textDecoration !== 'line-through' ? 'line-through' : 'none'
//     }
// })

// let submit = document.querySelector("#addnew");
// submit.addEventListener("click", function (event) {
//     // preventing the form from being submitted
//     event.preventDefault();
//     // getting the text input element
//     var input = document.querySelector("#text")
//     // getting the todo description from the input element
//     var description = input.value;

//     if (description) {
//         // Saving the description to local storage
//         window.localStorage.setItem('lastInput', description) 
//         // Adding a list item with the description
//         addListItem(input.value);
//         // Emptying the text of the input element
//         input.value = '';
//     } 
// })

// let btnRemDone = document.querySelector("#removedone");
// btnRemDone.addEventListener("click", function (event) {
//     var listItems = document.querySelectorAll('#todos li')
//     console.log(listItems)
//     var list = document.querySelector('#todos')

//     for (var i = 0; i < listItems.length; i++) {
//         if (listItems[i].style.textDecoration === 'line-through') {
//             list.removeChild(listItems[i])
//         }
//     }
// })



// // This code is executed When the page loads
// var lastInput = window.localStorage.getItem('lastInput')
// console.log('last Input: ', lastInput)
// addListItem(lastInput)