//instructor's solution

Array.from(document.querySelectorAll('.convert')).map(function(btn) {
    btn.addEventListener('click', function (event) {
        var num = document.querySelector('#num').value
        fetch ('http://codyhess.com:9000/' + num + '/' + event.target.dataset.base)
            .then (function(response) {
                return response.json()
            })
            .then (function(conversion) {
                document.querySelector('#origNum').innerText = num
                document.querySelector('#origBase').innerText = event.target.dataset.baseText
    
                document.querySelector('#asBin').innerText = conversion.conversions.binary
                document.querySelector('#asDec').innerText = conversion.conversions.decimal
                document.querySelector('#asHex').innerText = conversion.conversions.hex
            })
    })
})



document.querySelector('#fromDec').addEventListener('click', function (event) {
    var num = document.querySelector('#num').value
    fetch ('http://codyhess.com:9000/' + num + '/dec')
        .then (function(response) {
            return response.json()
        })
        .then (function(conversion) {
            document.querySelector('#origNum').innerText = num
            document.querySelector('#origBase').innerText = 'Decimal'

            document.querySelector('#asBin').innerText = conversion.conversions.binary
            document.querySelector('#asDec').innerText = conversion.conversions.decimal
            document.querySelector('#asHex').innerText = conversion.conversions.hex
        })
})

document.querySelector('#fromHex').addEventListener('click', function (event) {
    var num = document.querySelector('#num').value
    fetch ('http://codyhess.com:9000/' + num + '/hex')
        .then (function(response) {
            return response.json()
        })
        .then (function(conversion) {
            document.querySelector('#origNum').innerText = num
            document.querySelector('#origBase').innerText = 'Hexidecimal'

            document.querySelector('#asBin').innerText = conversion.conversions.binary
            document.querySelector('#asDec').innerText = conversion.conversions.decimal
            document.querySelector('#asHex').innerText = conversion.conversions.hex
        })
})

// usually a fetch is followed by two thens
// curly brace in the json file is just showing what syntax to place, don't add the curly braces


//------Peter cleaned it up and made it a lot shorter-------//

// Array.from(document.querySelectorAll('.convert')).map(function(btn) {
//     btn.addEventListener('click', function(event) {
//         var num = document.querySelector('#num').value
//         fetch('http://codyhess.com:9000/' + num + '/' + event.target.dataset.base)
//             .then(function(response) {
//                 return response.json()
//             })
//             .then(function(conversion) {
//                 document.querySelector('#origNum').innerText = num
//                 document.querySelector('#origBase').innerText = conversion.original.base
    
//                 document.querySelector('#asBin').innerText = conversion.conversions.binary
//                 document.querySelector('#asDec').innerText = conversion.conversions.decimal
//                 document.querySelector('#asHex').innerText = conversion.conversions.hex
//             })
//     })
// })