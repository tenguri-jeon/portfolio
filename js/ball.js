main();
function main() {
    
    introAnimation();
    function introAnimation() {
        
        const $ballPiece = document.querySelectorAll('.ball');
        const $ballText = document.getElementsByClassName('ball-text');
        const $ballShadow = document.querySelector('#ballshadow');
        const $gyugle = document.getElementsByClassName('gyufle');
        const $searchContainer = document.getElementsByClassName('searh-area');
        const $ballWrapper = document.getElementsByClassName('ball-wrapper');
        const $scrolldown = document.getElementsByClassName('scroll-down');
        
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
        totalSearchHistory()
        setInterval(() => {
            totalSearchHistory();
        }, 14000);
        
        
    },11500)
} 

const typing = ['하루하루 성실한', '책임감 강한', '상상력이 풍부한', '성장가능성이 높은'];
const $text = document.querySelectorAll('.explane-me p'); 
const searchArea = document.querySelector('.searh-area')
const $imagine = document.getElementsByClassName('imagine');
const $searchingMyName = document.getElementsByClassName('search-my-name');
const plusPx = 54;
const myname = ['신입 퍼블리셔 전규리'];
const mynameSplit = myname[0].split("");
let searchContainerHeight = 60; 

function searchingMyname(){
    typingName();
    setInterval(()=>{
        typingName();
    },14000)
}

function typingName(){
    $searchingMyName[0].innerHTML = '';
    for (let i = 0; i < mynameSplit.length; i++) {
        setTimeout(()=>{
            $searchingMyName[0].innerHTML += mynameSplit[i]
        },100*i)
    }
    setTimeout(()=>{
        $searchingMyName[0].innerHTML = '';
    },6000)
}

function totalSearchHistory(){
    for(let i = 0 ; i < typing.length ; i ++) {
        setTimeout(() => {
            makeSearchHistory(typing[i]);
        }, 1500 * i);
    }
    
    
    function makeSearchHistory(contents) {
        
        const $main = document.getElementById('main');
        
        const container = document.createElement('div');
        container.classList.add('explane-me');
        
        const serachIconContainer = document.createElement('figure');
        
        const imgTag = document.createElement('img');
        imgTag.setAttribute('src','img/icon_magnifyingglass_.png')
        imgTag.setAttribute('alt','돋보기')
        
        const textContainer = document.createElement('p')
        textContainer.classList.add('imagine');
        
        container.appendChild(serachIconContainer);
        serachIconContainer.appendChild(imgTag);
        
        container.appendChild(textContainer);
        
        searchArea.insertBefore(container, document.querySelector('.search-area'));
        $main.appendChild(document.querySelector('.scroll-down'));
        
        searchContainerHeight += plusPx;
        searchArea.style.height = `${searchContainerHeight}px`;
        
        
        makeHistoryLine(contents);
        
        function makeHistoryLine(textContent){
            let textTemp = textContent.split("");
            
            for (let i = 0; i < textTemp.length ; i++) {
                setTimeout(()=>{
                    textContainer.innerHTML += textTemp[i];
                },100*i)
            }
        }
        
        setTimeout(()=>{
            removeSerarch();
        },2000)
        
        function removeSerarch() {
            setTimeout(() => {
                container.remove();
                searchContainerHeight -= plusPx;
                searchArea.style.height = `${searchContainerHeight}px`;
            }, 5000);
        }
    }
    
    
    
}

clickIndex();
function clickIndex(params) {
    
    const navigation = document.querySelectorAll('nav a');
    const $profileContainer = document.getElementById('profile');
    const $skillsContainer = document.getElementById('skills');
    const $workoutContainer = document.getElementById('workout');
    const $contactContainer = document.getElementById('contact');
    const $containerprofilIndex = document.getElementsByClassName('container-profil-index');
    const $containerskillIndex = document.getElementsByClassName('container-skill-index');
    const $containerworkoutIndex = document.getElementsByClassName('container-workout-index');
    
    
    navigation[0].addEventListener('click',(e)=>{
        e.preventDefault();
        goProfileContainer();
    })
    navigation[1].addEventListener('click',(e)=>{  
        e.preventDefault();
        goSkillsContainer();     
    })
    navigation[2].addEventListener('click',(e)=>{  
        e.preventDefault();
        goWorkoutContainer();     
    })
    navigation[3].addEventListener('click',(e)=>{  
        e.preventDefault();
        goContactContainer();     
    })
    
    
    
    for (let i = 0; i < $containerskillIndex.length; i++) {
        $containerskillIndex[i].addEventListener('click', (e)=>{
            goSkillsContainer();
        });
    }
for (let i = 0; i < $containerprofilIndex.length; i++) {
    $containerprofilIndex[i].addEventListener('click', (e)=>{
        goProfileContainer();
    });
}
for (let i = 0; i < $containerworkoutIndex.length; i++) {
    $containerworkoutIndex[i].addEventListener('click', (e)=>{
        goWorkoutContainer();
    });
}


function goContactContainer() {
    window.scrollTo(0, window.scrollY + $contactContainer.getBoundingClientRect().top);
}
function goProfileContainer() {
    window.scrollTo(0, window.scrollY + $profileContainer.getBoundingClientRect().top);
}
function goSkillsContainer() {
    window.scrollTo(0, window.scrollY + $skillsContainer.getBoundingClientRect().top);
}
function goWorkoutContainer() {
    window.scrollTo(0, window.scrollY + $workoutContainer.getBoundingClientRect().top);
}

}
}