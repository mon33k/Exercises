
// var firstId = window.prompt("Enter an ID either one, two, three, or four");
// var secondId = window.prompt("Enter Another ID either one, two, three or four")

// function updateItems (id, id2) {
//     document.getElementById(id).innerText = document.getElementById(id2).innerText;
// }

// updateItems(id, id2);


function swapList () {
    
    let firstId = prompt("Choose which list you will like to swap to");
    let secondId = prompt("Choose which list you will like to swap to");

    let firstElement = document.getElementById(firstId);
    let secondElement = document.getElementById(secondId);

    let temp = firstElement.innerText;
    firstElement.innerText = secondElement.innerText; 
    secondElement.innerText = temp;
}

swapList();