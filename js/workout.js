const $workoutIndex = document.getElementsByClassName('workout-index');
const $workOutExplane = document.getElementsByClassName('work-out-explane');
const $folder = document.querySelectorAll('.folder');
const $workoutOverflowContainer = document.querySelector('.workout-overflow-container');
const $workout = document.getElementsByClassName('goto-workout');
const $folderSpan = document.querySelectorAll('.folder span');
console.log($folderSpan);

for(let i = 0 ; i < $workoutIndex.length ; i++ ){
    $workoutIndex[i].addEventListener('click', ()=>{
        resetIndex();
        $workoutIndex[i].classList.add('pick-index');
        $workOutExplane[i].classList.add('workout-display')
    })
}

for (let i = 0; i < $workout.length; i++) {
    $workout[i].addEventListener('click', ()=>{
        resetWorkout();
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

folderText();
function folderText(){
    for (let i = 0; i < $folder.length; i++) {
        $folder[i].addEventListener('click' , ()=>{
            folderinnerText();
            $folder[i].classList.toggle('folder-arrow-click');
            $workoutOverflowContainer.classList.toggle('workout-height-unset');
        }) 
    }
}

function folderinnerText() {   
    for (let i = 0; i < $folderSpan.length; i++) {
        if ($folderSpan[i].innerHTML = '펼치기'){
            $folderSpan[i].innerHTML = '접어두기'
        }
        else if ($folderSpan[i].innerHTML = '접어두기'){
            $folderSpan[i].innerHTML = '펼치기'
        }
    }    
}