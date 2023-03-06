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
        for(let i = 0 ; i < typing.length ; i ++) {
    setTimeout(() => {
        makeSearchHistory(typing[i]);
    }, 1500 * i);
}
    },11500)
} 


const typing = ['하루하루 성실한', '책임감 강한', '상상력이 풍부한', '성장가능성이 높은'];
const $text = document.querySelectorAll('.explane-me p'); 
const searchArea = document.querySelector('.searh-area')
let searchContainerHeight = 60; //초기값 설정;
const plusPx = 50;
console.log(searchContainerHeight);


// 이상하게 나타남
// setInterval(()=>{
    // for (let i = 0; i < $text.length; i++) {
    //     $text[i].innerHTML = ''; 
    //     for (let j = 0; j < typing[i].length; j++) {
    //         console.log(typing[i].length)
    //         setTimeout(()=>{
    //             $text[i].innerHTML += typing[j].split("");
    //         }, 100*j)
    //     }
    // }
// },5000);



function makeSearchHistory(contents) {
    const container = document.createElement('div');
    container.classList.add('explane-me');

    const serachIconContainer = document.createElement('figure');

    const imgTag = document.createElement('img');
    imgTag.setAttribute('src','img/🦆 icon _magnifying glass_.png')
    imgTag.setAttribute('alt','돋보기')

    const textContainer = document.createElement('p')
    textContainer.classList.add('imagine');

    container.appendChild(serachIconContainer);
    serachIconContainer.appendChild(imgTag);
    
    container.appendChild(textContainer);

    searchArea.insertBefore(container, document.querySelector('.scroll-down'));
    
    console.log(searchContainerHeight);

    searchContainerHeight += plusPx;
    searchArea.style.height = `${searchContainerHeight}px`;
}


