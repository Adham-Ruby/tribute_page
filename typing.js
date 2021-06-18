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
