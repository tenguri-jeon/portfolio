const $workoutIndex = document.getElementsByClassName('workout-index');
const $workOutExplane = document.getElementsByClassName('work-out-explane');
const $folder = document.querySelectorAll('.folder');
const $workoutOverflowContainer = document.querySelector('.workout-overflow-container');
const $workout = document.getElementsByClassName('goto-workout');
let $folderSpan = document.querySelectorAll('.folder span');
let index = 0;


workoutIndex();
function workoutIndex() {
    
    for(let i = 0 ; i < $workoutIndex.length ; i++ ){
        $workoutIndex[i].addEventListener('click', ()=>{
            resetIndex();
            resetWorkout();
            $workoutIndex[i].classList.add('pick-index');
            $workOutExplane[i].classList.add('workout-display')
            $workout[i].classList.remove('back-index');
            $workOutExplane[i].classList.add('workout-display')
        })
    }
    
    for (let i = 0; i < $workout.length; i++) {
        $workout[i].addEventListener('click', ()=>{
            resetIndex();
            resetWorkout();
            $workoutIndex[i].classList.add('pick-index');
            $workOutExplane[i].classList.add('workout-display')
            $workout[i].classList.remove('back-index');
            $workOutExplane[i].classList.add('workout-display')
        })
    }
    
    
    function resetIndex(){
        for(let i = 0 ; i < $workoutIndex.length ; i ++){
            $workoutIndex[i].classList.remove('pick-index');
            $workOutExplane[i].classList.remove('workout-display');
        }
    }
    
    function resetWorkout() {
        for (let i = 0; i < $workout.length; i++) {
            $workout[i].classList.add('back-index');
            $workOutExplane[i].classList.remove('workout-display');
        }
    }
}


// 펼치기 상태에서 workout 다른걸 누르면 화살표 변경하는 방법 / 위로 올라오게 만드는 방법
folderText();
function folderText(){
    for (let i = 0; i < $folder.length; i++) {
        $folder[i].addEventListener('click' , ()=>{
            $folder[i].classList.toggle('folder-arrow-click');
            $workoutOverflowContainer.classList.toggle('workout-height-unset');
        }) 
    }
}

exchangeFolder();
function exchangeFolder() {
    const folderArray = ['펼치기', '접어두기']
    for (let i = 0; i < $folderSpan.length; i++) {
        $folder[i].addEventListener('click', ()=>{
                index++
                if (index > 1) {
                    index = 0
                }
                $folderSpan[0].innerHTML = `${folderArray[index]}`;
                $folderSpan[1].innerHTML = `${folderArray[index]}`;
            })
        }
    }

sizeWorkout();
function sizeWorkout() {
    
    const $workoutOverflowContainer= document.getElementsByClassName('workout-overflow-container');
    let $workoutExplane = document.getElementsByClassName('work-out-explane');
    let workoutWidth;
    
    workoutSize();
    window.addEventListener('resize', ()=>{
        workoutSize()
    });
    
    function workoutSize(){
        workoutWidth = $workoutOverflowContainer[0].clientWidth; 
        for (let i = 0; i < $workoutExplane.length; i++) {
            $workoutExplane[i].style.width = `${workoutWidth}px`;
        }
    }

}        