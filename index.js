//  toggle icon navbar///////////////////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};






// scroll sections actine links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
      });
    };
  });

  ///////////////// // sticky navbar////////////////////
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


//scroll revaeal///////////////////
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

function fillContactForm(element) {
    const container = element.closest(".portfolio-layer");
    const productName = container.querySelector("h4")?.textContent || "";
    const productDescription = container.querySelector("p")?.textContent || "";

    document.getElementById("contactProductName").value = productName;
    document.getElementById("contactProductDescription").value = productDescription;
  }
