
document.addEventListener("DOMContentLoaded", function(event) {
    let button = document.querySelector("button");

    button.addEventListener("click", function(event) {
        let bub = document.createElement("img");
        bub.src = "bubbles.png"
        bub.style.top = Math.round(Math.random() * 95 ).toString() + "%";
        bub.style.left = Math.round(Math.random() * 99 ).toString() + "%";
        bub.style.position = "fixed";

        document.body.appendChild(bub)
    })
})