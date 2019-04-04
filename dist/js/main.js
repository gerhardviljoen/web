let menu = document.querySelector("#navbarButton");
let navbarMenu = document.querySelector("#menuHeader");

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const auto = true;
const intervalTime = 5000;
let slideInterval;

menu.addEventListener('click', e=>{
  toggleMenu();
});

next.addEventListener('click', e=> {
  nextSlide();
  resetInterval();
});

prev.addEventListener('click', e=> {
  prevSlide();
  resetInterval();
})

window.addEventListener("scroll", e=>{
  navbarOnscroll();
});

const navbarOnscroll = ()=> {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
  {
    navbarMenu.classList.add("scroll");
  }else{
    navbarMenu.classList.remove("scroll");
  }
};

const toggleMenu = ()=>{

  if (navbarMenu.classList.contains("open"))
  {
    navbarMenu.classList.remove("open");
  }
  else
  {
    navbarMenu.classList.add("open");
  }
};

const nextSlide = () =>{

  const current = document.querySelector('.currentSlide');
  current.classList.remove('currentSlide');
    
  if (current.nextElementSibling.classList.contains('slide'))
  {
    current.nextElementSibling.classList.add('currentSlide');
  }else{
    slides[0].classList.add('currentSlide');
  }

  setTimeout(() =>current.classList.remove('currentSlide'));
};

const prevSlide = () =>{

  const current = document.querySelector('.currentSlide');
  current.classList.remove('currentSlide');

  if (current.previousElementSibling)
  {
    current.previousElementSibling.classList.add('currentSlide');
  }else{
    slides[slides.length - 1].classList.add('currentSlide');
  }

  setTimeout(() =>current.classList.remove('currentSlide'));
};

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
};

const resetInterval = ()=>{
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
};

