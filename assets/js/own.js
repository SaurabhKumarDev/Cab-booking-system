const nav = document.querySelector(".header");
const testimonial = document.querySelector(".testimonial_container");
const contact = document.querySelector(".contact_container");
const frame = document.querySelector(".book_ride-frame");
const gallery = document.querySelector(".gallery_container");
const about = document.querySelector(".about_container");
const why = document.querySelector(".why_container");
const banner = document.querySelector(".banner_container");



testimonial.addEventListener('mouseover', function (e) {
    nav.className += ' navDisplay';
    nav.classList.remove('navDisplayShow');
})

gallery.addEventListener('mouseover', function() {
    nav.classList.remove('navDisplay');
    nav.className += ' navDisplayShow';
})

frame.addEventListener('mouseover', function (e) {
    nav.className += ' navDisplay';
    nav.classList.remove('navDisplayShow');
})

contact.addEventListener('mouseover', function (e) {
    nav.className += ' navDisplay';
    nav.classList.remove('navDisplayShow');
})

banner.addEventListener('mouseover', function() {
    nav.classList.remove('navDisplay');
    nav.className += ' navDisplayShow';
})

why.addEventListener('mouseover', function() {
    nav.classList.remove('navDisplay');
    nav.className += ' navDisplayShow';
})

about.addEventListener('mouseover', function() {
    nav.classList.remove('navDisplay');
    nav.className += ' navDisplayShow';
})