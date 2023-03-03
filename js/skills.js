
skills();
function skills() {
    
    const $skill = document.getElementsByClassName('skill');
    const $skillExplane = document.getElementsByClassName('skills-explane');
    const $skilltext = document.getElementsByClassName('hover-img');
    
    
    window.addEventListener('resize', ()=>{
        if (window.innerWidth < 1140){
            skillsTouch();
            hoverOrtouch();
        }
        else{
        }
    })
    
    skillsTouch();
    function skillsTouch() {
        for (let i = 0; i < $skill.length; i++) {
            $skill[i].addEventListener('click', (e)=>{
                $skillExplane[i].classList.toggle('touch-img');            
            })
        }
    }
    
    function hoverOrtouch() {
        $skilltext[0].innerHTML = '이미지를 터치 해보세요'
    }
}

skillBar();
function skillBar() {
    let observer = new IntersectionObserver ((e)=>{
        e.forEach((bar)=>{
            if(bar.isIntersecting){
                bar.target.classList.add('bar-width');
            } else{
                bar.target.classList.remove('bar-width');
            }
        })
    })
    
    const $wholeBar = document.getElementsByClassName('whole-bar');
    observer.observe($wholeBar[0])
    observer.observe($wholeBar[1])
    observer.observe($wholeBar[2])
    observer.observe($wholeBar[3])
    observer.observe($wholeBar[4])
}