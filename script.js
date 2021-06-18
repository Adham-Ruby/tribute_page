const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

var img = document.querySelector('.about-bio-img'), 
body = document.body,
html = document.documentElement,
scrollPos;

var imgHeight = img.scrollHeight;

window.addEventListener("scroll", function(event){
scrollPos = body.scrollTop || html.scrollTop;
if (scrollPos >= imgHeight) {
    nav.classList.add("nav-background");    
} else {
    nav.classList.remove("nav-background");    
}
});
