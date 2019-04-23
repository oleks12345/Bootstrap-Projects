//header scroll
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');

const navCheckTop = () => {
   setTimeout(() => {

      if (window.pageYOffset > 0 || !navbarToggler.classList.contains('collapsed')) {
         navbar.classList.add('navbar--top');
      } // 
      else {
         navbar.classList.remove('navbar--top');
      }
   }, 0)
};
document.addEventListener('scroll', navCheckTop);
navbar.addEventListener('click', navCheckTop);