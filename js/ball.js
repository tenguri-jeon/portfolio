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

    function opacity() {
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
        searchingMyname();
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
const $imagine = document.getElementsByClassName('imagine');
const $searchingMyName = document.getElementsByClassName('search-my-name');
const plusPx = 50;
const myname = ['신입 퍼블리셔 전규리'];
const mynameSplit = myname[0].split("");
let typingSplit;
let searchContainerHeight = 60; 

function searchingMyname(){
    setInterval(()=>{
        for (let i = 0; i < mynameSplit.length; i++) {
            setTimeout(()=>{
                $searchingMyName[0].innerHTML += mynameSplit[i]
            },100*i)
            $searchingMyName[0].innerHTML = '';
        }
    },5000)
}




function makeSearchHistory(contents) {

        const $main = document.getElementById('main');
        
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
        
        console.log(searchArea);
        searchArea.insertBefore(container, document.querySelector('.search-area'));
        // searchArea.appendChild(document.querySelector('.searh-area'));
        $main.appendChild(document.querySelector('.scroll-down'));

        searchContainerHeight += plusPx;
        searchArea.style.height = `${searchContainerHeight}px`;
        
        for (let i = 0; i < typing[index].length; i++) {
            setTimeout(()=>{
                typingSplit = typing[index -1 ].split("")
                textContainer.innerHTML += typingSplit[i];
            },100*i)
        }
        index++
}

navigationTap();
function navigationTap(params) {
    const navigation = document.querySelectorAll('nav a');
    
    navigation[0].addEventListener('click',()=>{
        tapgoProfile();
        function tapgoProfile() {
            let goProfileTap;
            goProfileTap = window.scrollTo(0,window.scrollY + $profileTop);
            let $profileTop = document.getElementById('profile').getBoundingClientRect().top;
        }
    })
    navigation[1].addEventListener('click', ()=>{
        tapgoSkills();
        function tapgoSkills() {
            let goSkillsTap;
            goSkillsTap = window.scrollTo(0,window.scrollY + $skillsTop);
            let $skillsTop= document.getElementById('skills').getBoundingClientRect().top;
        }
    })
    navigation[2].addEventListener('click', ()=>{
        tapWorkout();
        function tapWorkout() {
            let goWorkoutTap;
            goWorkoutTap = window.scrollTo(0,window.scrollY + $workoutTop);
            let $workoutTop= document.getElementById('workout').getBoundingClientRect().top;
        }
    })
    navigation[3].addEventListener('click', ()=>{
        tapContatct();
    function tapContatct() {
        let goContactTap;
        goContactTap = window.scrollTo(0,window.scrollY + $contactTop);
        let $contactTop= document.getElementById('contact').getBoundingClientRect().top;
    }
})

}

