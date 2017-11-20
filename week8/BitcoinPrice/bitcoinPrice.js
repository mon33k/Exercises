
function getPrice() {
    console.log(this.responseText);
    var output = document.querySelector('#output').innerText
    var bitcoin = JSON.parse(this.responseText)
    var rate = bitcoin.bpi.USD.rate_float
    document.querySelector('#output').innerText = rate
    console.log(rate)
}

function convert2bit() {
    var toBitcoin = document.querySelector('#toBitcoin')
    var bitcoin = JSON.parse(this.responseText)
    var rate = bitcoin.bpi.USD.rate_float
    console.log(rate)
    var num = parseInt(input.value) * rate
    document.querySelector('#output').innerText = 'The current value of bitcoin is ' + num + ' bitcoins'
    console.log(input)

}

function convert2USD() {
    var toUSD = document.querySelector('#toUSD')
    var bitcoin = JSON.parse(this.responseText)
    var rate = bitcoin.bpi.USD.rate_float
    console.log(rate)
    var num = Number(input.value) / rate;
    document.querySelector('#output').innerText = 'The current value of bitcoin is $' + num + ' US Dollars'

}


document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('#input');
    var fetch = document.querySelector('#fetch');
    var toBitcoin = document.querySelector('#toBitcoin');
    var toUSD = document.querySelector('#toUSD');

    fetch.addEventListener("click", function () {

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", getPrice);
        oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
        oReq.send();


    });

    toBitcoin.addEventListener("click", function () {

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", convert2bit);
        oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
        oReq.send();


    });

    toUSD.addEventListener("click", function () {

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", convert2USD);
        oReq.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
        oReq.send();


    });


});

