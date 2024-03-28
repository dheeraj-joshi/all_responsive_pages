let body = document.querySelector("body")
let parent = document.querySelector(".parent");
let nav_items = document.querySelector(".nav_items")

parent.addEventListener("click", (e) => {
    e.preventDefault()
    nav_items.classList.toggle("start-0");
     nav_items.classList.add("transition-400ms");
    body.classList.toggle("overflow-hidden")


    
});





