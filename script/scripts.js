const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');

const links = document.querySelectorAll('.navbar-links li a');




let header = document.getElementById('header');
let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev")

function createSwiper(container, pagination, nextButton, prevButton){
  return new Swiper(container, {
    slidesPerView: handWidth(),
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
}

menuHamburguer.addEventListener('click', () => {
  nav.classList.toggle('active');
});

links.forEach(item => {
  item.addEventListener('click', () =>{
    nav.classList.toggle('active');
  })
})


function handWidth(){
  let getWidth = window.innerWidth || document.documentElement.clientWidth;

  let slideShow = 3;

  if(getWidth < 1001){
    slideShow = 2;
  }

  if(getWidth < 700){
    slideShow = 1;
  }

  return slideShow

}

window.addEventListener('resize', () => {
  swiper.params.slidesPerView = handWidth();
  swiper.update();
})

window.addEventListener('scroll', () =>{
    if(window.scrollY >= 200){
        header.style.background = '#191919';
        header.style.transition = '.5s ease';
    }else{
        header.style.background = 'transparent';
    }
});

