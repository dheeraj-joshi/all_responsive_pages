let body = document.querySelector("body");
let nav = document.querySelector(".nav_items")

function shownav() {
    nav.classList.toggle("shownav")
    document.body.classList.toggle("overflow-hidden");
}


let preloader = document.getElementById("loading");
setTimeout(() => {
    preloader.style.display = "none";
}, 3000);



