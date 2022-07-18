const hamburger = document.querySelector('.nav-btn');
const navMenu = document.querySelector('.nav-links');
let isOpen = false;
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navMenu.style.display ='block';
  document.body.style.overflow ='auto';
});
navMenu.addEventListener('click', ()=>{
  navMenu.style.display ='none';
  if(isOpen){
    hamburger.classList.toggle('active');
    isOpen = false;
  } else {
    hamburger.classList.remove('active');
    isOpen = true;
  }
})

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');

}));
