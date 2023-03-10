contact();
function contact() {
    
    const $contactContentsWrapper = document.getElementsByClassName('contact-contents-wrapper');
    const $contactLi = document.querySelectorAll('.contact-contents-wrapper li');
    const $contactIndex = document.getElementsByClassName('contact-index');
    const $submit = document.getElementsByClassName('submit-message');
    const $sendMessage = document.getElementsByClassName('submit-message');
    let contactWidth = document.getElementsByClassName('contact-contents-background');
    let width;
    
    
    window.addEventListener('resize', ()=>{
        contactResize()
    })

contactIndexdeco();
function contactIndexdeco() {
    
    $contactIndex[0].addEventListener('click', ()=>{
        $contactIndex[0].classList.add('contact-index-color')
        $contactIndex[1].classList.remove('contact-index-color')
        $contactLi[1].classList.add('contact-display-none');
        $contactLi[0].classList.remove('contact-display-none');
    })
    
    $contactIndex[1].addEventListener('click', ()=>{
        $contactIndex[0].classList.remove('contact-index-color')
        $contactIndex[1].classList.add('contact-index-color')
        $contactLi[0].classList.add('contact-display-none');
        $contactLi[1].classList.remove('contact-display-none');
    })
}


contactResize();
function contactResize(){
    if (window.innerWidth > 360) {
        width = contactWidth[0].clientWidth - 120; 
    }
    else{
        width = contactWidth[0].clientWidth - 32; 
    }
    for (let i = 0; i < $contactLi.length; i++) {
        $contactLi[i].style.width = `${width}px`
    }
}

}