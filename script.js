
//Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// menu open close
// let menu = document.querySelector('.menu-icon');

// menu.onclick = ()=> {
//     menu.classList.toggle("move");
//     navbar.classList.toggle("open-menu");
// }

function myFunction(x) {
  x.classList.toggle("change");
}

//Close menu on scroll 
window.onscroll = ()=> {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
}
