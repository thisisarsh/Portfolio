let words = document.getElementsByClassName('word');
console.log(words);
let wordArray = [];
let currentWord = 0;

words[currentWord].style.opacity = 1;
for(let i = 0; i < words.length; i++){
    splitLetters(words[i]);
}

function splitLetters(word) {
    let content = word.innerHTML;
    word.innerHTML = '';
    let letters = [];
    for (let i = 0; i < content.length; i++){
        let letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }
    wordArray.push(letters);
}

function changeWord(){
    let cw = wordArray[currentWord];
    let nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for(let i = 0; i < cw.length; i++){
        animateLetterOut(cw, i);
    }
    for(let i = 0; i< nw.length; i++){
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i){
    setTimeout(() => {
        cw[i].className = 'letter out';
    }, i*80);
}

function animateLetterIn(nw, i){
    setTimeout(() => {
        nw[i].className = 'letter in';
    }, 340+(i*80));
}

changeWord();
setInterval(changeWord, 4000);

let rotating = document.getElementById('rotating');
// rotating.addEventListener('wheel', e => {
//     let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
//     if(delta > 0){
//         rotating.style.display = 'none';
//     document.getElementById("main-content").style.display = "flex";
//     }
// });

function fadeOut() {
    document.getElementById('hello').className = 'fadeOut';
    let array = document.getElementsByClassName('word'); 
    console.log(array);

    for(let i = 0; i< array.length; i++){
        array[i].className = 'fadeOut';
    }
}

rotating.addEventListener('wheel', e => {
    let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
    if(delta > 0){
        fadeOut();
    }
});

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('.nav-2');
var lineOne = document.querySelector('.nav-2 .menu-btn .line--1');
var lineTwo = document.querySelector('.nav-2 .menu-btn .line--2');
var lineThree = document.querySelector('.nav-2 .menu-btn .line--3');
var link = document.querySelector('.nav-2 .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})