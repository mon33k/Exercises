function reqListener() {
    console.log(this.responseText)

    var text = this.responseText

    var para = document.querySelector('#para')
    para.innerText += text + '\n' + '\n'
    
}

document.addEventListener('DOMContentLoaded', function () { //DOMContentLoaded loads the entire HTML file 
    var newPara = document.querySelector('#newParaBtn');
    newPara.addEventListener("click", function () {
        var oReq = new XMLHttpRequest();

        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text");
        oReq.send();

    });
})
