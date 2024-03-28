let nav = document.querySelector(".nav_items");

function shownav() {
    nav.classList.toggle("shownav")
    document.body.classList.toggle("overflow-hidden")
}
let body = document.querySelector(".main")
let cursor = document.querySelector(".cursor")

body.addEventListener("mousemove", (moves) => {
    cursor.style.left = moves.x + "px"
    cursor.style.top = moves.y + "px"
    console.log(moves.x);
})