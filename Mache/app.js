//header scroll
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');

const navCheckTop = () => {
   if (window.pageYOffset > 0) {
      navbar.classList.add('navbar--top');
   } // 
   else {
      navbar.classList.remove('navbar--top');
   }
};
document.addEventListener('scroll', navCheckTop);
navbar.addEventListener('click', navCheckTop);