// variables
const texts = ['Liverpool Football Player',  'PFA Best Player 2018', "African Best Player 2017", "Winner of Golden Boot 2018"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
var typing = document.querySelector('.dynamic-text');

(function type() {

    if(count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typing.textContent = letter;
    if(letter.length === currentText.length) {
        count ++;
        index = 0;
    }

    setTimeout(type, 225);
})();


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
