///////// Question 2 // From File I/O //////
///Modify the airbnb.js to store the rooms in a file, use JSON format.

var readline = require("readline")
var fs = require('fs')

var options = 'list, show n, reserve n, occupancy n max, search amenity, save'

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var rooms;

fs.readFile('rooms.json', function(err, file){              //readline transports your information to the json file, write file makes a new file 
    if (err) throw err;
    rooms = JSON.parse(file);
});

// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(n) {
    var room = rooms[n]
    console.log('Details of room #' + (n + 1))
    console.log('----------------------\n')
    if (room.reserved) {
        console.log('[RESERVED]')
    }
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
}

function reserve(n) {
    if (rooms[n].reserved) {
        console.log('Sorry, it\'s already reserved.')
        return
    } 
    rooms[n].reserved = true
    console.log('Thank you for reserving')
}

function occupancy(n, max) {
    rooms[n].maxOccupants = max
    console.log('Occupants set.')
}

function list(callback) {
    console.log(
        padLeft('ID', 2),
        '...',
        padTo('Address', 30), 
        ' ', 
        padLeft('Price', 8)
    );
    for (var i = 0; i < rooms.length; i++) {
        if (callback(rooms[i])) {
            var counter = i + 1;
            console.log(
                padLeft(counter.toString(), 2),
                '...',
                padTo(rooms[i].location, 30), 
                ' ', 
                padLeft(toMoney(rooms[i].price), 8)
            );
        }
    }
}

rl.on('line', function(input) {
    var inputArr = input.split(' ')
    if (inputArr[0] === 'list') {
        list(function (room) {
            return !room.reserved
        });        
    } else if (inputArr[0] === 'show') {
        showDetails(inputArr[1] - 1)
    } else if (inputArr[0] === 'reserve') {
        reserve(inputArr[1] - 1)
    } else if (inputArr[0] === 'occupancy') {
        occupancy(inputArr[1] - 1, inputArr[2])
    } else if (inputArr[0] === 'search') {
        var amenity = inputArr.slice(1).join(' ')
        list(function (room) {
            return !room.reserved && room.amenities.indexOf(amenity) > -1
        });  
    } else if (inputArr[0] === 'save'){ 
        save();
    } else if (inputArr[0] === 'quit'){ 
        process.exit()
    } else {
        console.log('Unknown command: ' + input)
    }

    console.log('\n\nPlease chose one of [' + options + '] $')
})

console.log('Please chose one of [' + options + '] $')


//make a new command like show occupancy, called save - whatever is in the rooms its going to put it in the JSON room file using JSON stringify 
function save(){
    fs.writeFile('rooms.json', JSON.stringify(rooms, null, 2), function(err){   //Whenever you reserve a room and save it, if you run the function over again it saves that information 
        if (err) throw err;
        console.log('Saved.');
    })
}
//Adding null, 2 to the parameters allows for the room.json to be updated with formatting of indents and stuff 
