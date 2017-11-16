// Lemon​ ​Lime
// Create ​the​ ​files​ ​etm.html​,​etm.css​ and etm.js​ ​to​ ​build​ ​a​ ​page​ ​with​ ​four​ ​lorem​ ​ipsum​ ​paragraphs, and​ ​build​ ​separate​ ​class​ ​rules​​.bgGreen​​ ​and​ ​.bgYellow​​ ​with​ ​the​ ​properties background-color:​ ​green​,​ ​and​ ​background-color:​ ​yellow​.​ ​With​ ​etm.js​,​ ​use document.querySelectorAll()​​ ​to​ ​bind​ ​all​ ​of​ ​the​ ​paragraphs​ ​to​ ​a​ ​variable,​ ​and​ ​then​ ​loop through​ ​those​ ​paragraphs,​ ​using​ ​.classList.add()​​ ​to​ ​add​ ​the​ ​bgGreen​​ ​class​ ​and​ ​the bgYellow​​ ​class​ ​to​ ​alternating​ ​paragraphs.

var paras = document.querySelectorAll('p')

var loopPara = paras.forEach(function(value, index, array) {
    if (value % 2 === 0) {
        paras.classList.add(".bgGreen");
    }else {
        paras.classList.add(".bgYellow");
    }
})

return loopPara;
