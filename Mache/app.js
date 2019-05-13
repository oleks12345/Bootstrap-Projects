//navbar scroll
const navbar = document.querySelector('.navbar');

const navCheckTop = () => {
   if (window.pageYOffset > 0) {
      navbar.classList.add('navbar--top');
   } //
   else {
      navbar.classList.remove('navbar--top');
   }
};
document.addEventListener('scroll', navCheckTop);

const sections = [...document.querySelectorAll('.js-section')];
const navLinks = [...document.querySelectorAll('.nav-link')];
let currentSection = '';
const navCheckSection = () => {
   for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const navSize = window.innerWidth >= 768 ? 80 : 56;
      if (window.pageYOffset >= section.offsetTop - navSize) {
         if (currentSection === section.id) {
            break;
         } //
         else {
            console.log('tak');
            currentSection = section.id;
            navLinks.forEach((navLink) => {
               if (navLink.href.includes('#' + section.id)) {
                  navLink.classList.add('active');
               } else navLink.classList.remove('active');
            });
            break;
         }
      }
   }
};

$('.navbar-nav>a').on('click', function() {
   $('.navbar-collapse').collapse('hide');
   const divId = $(this).attr('href');
   $('html, body').animate(
      {
         scrollTop: $(divId).offset().top - (window.innerWidth >= 768 ? 80 : 56)
      },
      100
   );
});

document.addEventListener('scroll', navCheckSection);

navCheckTop();
navCheckSection();
