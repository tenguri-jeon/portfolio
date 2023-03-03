introAnimation();
function introAnimation() {
    
    const $ballPiece = document.querySelectorAll('.ball');
    const $ballText = document.getElementsByClassName('ball-text');
    const $ball = document.querySelector('#ball');
    const $ballShadow = document.querySelector('#ballshadow');
    const $gyugle = document.getElementsByClassName('gyufle');
    const $searchContainer = document.getElementsByClassName('searh-area');
    const $gyugleSpan = document.querySelectorAll('.gyufle span');
    const $ballWrapper = document.getElementsByClassName('ball-wrapper');
    const $scrolldown = document.getElementsByClassName('scroll-down');

    console.log($scrolldown);

    function opacity(params) {
        for (let i = 0; i < $ballPiece.length; i++) {
            $ballPiece[i].classList.add('ball-display')
        }
        for (let i = 0; i < $ballText.length; i++) {
            $ballText[i].classList.add('ball-display')
        }
    }

    function gyugleDisplay() {
        $gyugle[0].classList.remove('ball-display');
        $searchContainer[0].classList.remove('ball-display');
        $ballWrapper[0].classList.add('ball-display');
    }

    function downaroowAnimation() {
        $scrolldown[0].classList.remove('ball-display');
    }

    setTimeout(function(){
        opacity();
    }, 8000);


    setTimeout(function(){
        $ballShadow.classList.add('ball-display');
    },3000)

    setTimeout(function(){
        gyugleDisplay();
    },9000)

    setTimeout(function(){
        downaroowAnimation();
    },11500)
} 


const typing = ['하루하루 성실한', '책임감 강한', '상상력이 풍부한', '성장가능성이 높은'];
const text = document.querySelectorAll('.explane-me p'); 
let typingNumber;


setInterval(()=>{
    text.innerHTML = " ";
    for (let i = 0; i < typing.length; i++) {
        text[i].innerHTML = typing[i].split("")
    }  
},5000)







