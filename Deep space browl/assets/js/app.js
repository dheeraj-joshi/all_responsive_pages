let body = document.querySelector("body");
let parent = document.querySelector(".parent");
let nav_items = document.querySelector(".nav_items");
let parent_main = document.querySelector(".parent_main");
let ques = document.querySelectorAll('.ques')
console.log(ques);
let ans = document.querySelectorAll(".ans")
console.log(ans);
ques.forEach((item) => {
  item.addEventListener('click', () => {
    let x = item.nextElementSibling
    x.classList.toggle("d-block")
    ans.forEach((element) => {
      if (element!= x && element.classList.contains('d-block') ) {
       element.classList.remove("d-block")
     }
   })
  })
})

parent.addEventListener("click", (e) => {
  e.preventDefault();
  nav_items.classList.toggle("start-0");
  nav_items.classList.add("transition-400ms");
  body.classList.toggle("overflow-hidden");
});

// Accordian//

$(".responsive").slick({
  slidesToShow: 3.2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1,
  speed: 6000,
  dots: false,
  cssEase: "linear",
  waitForAnimate: false,
  pauseOnFocus: true,
  pauseOnHover: true,
  rtl: false,

  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 7.5,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 419,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
