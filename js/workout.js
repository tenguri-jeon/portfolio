const $workoutIndex = document.getElementsByClassName('workout-index');
const $workOutExplane = document.getElementsByClassName('work-out-explane');
const $folder = document.querySelectorAll('.folder');
const $workoutOverflowContainer = document.querySelector('.workout-overflow-container');
const $workout = document.getElementsByClassName('goto-workout');
const $mainWorkout = document.getElementById('workout')
let $folderSpan = document.querySelectorAll('.folder span');
let index = 0;
let goWorkoutTop;


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


// folderText();
// function folderText(){
    // for (let i = 0; i < $folder.length; i++) {
    //     $folder[i].addEventListener('click' , ()=>{
    //         $folder[i].classList.toggle('folder-arrow-click');
    //         $workoutOverflowContainer.classList.toggle('workout-height-unset');
    //     }) 
    // }
// }

exchangeFolder();
function exchangeFolder() {
    const folderArray = ['펼치기', '접어두기']
    for (let i = 0; i < $folder.length; i++) {
        $folder[i].addEventListener('click', ()=>{
            if ($folder[i].classList.contains('folder-arrow-click')) {
                for(let j = 0 ; j < $folder.length ; j ++) {
                    $folder[j].classList.remove('folder-arrow-click')
                }
                $folderSpan[0].innerHTML = `${folderArray[0]}`;
                $folderSpan[1].innerHTML = `${folderArray[0]}`;
            }else {
                for(let j = 0 ; j < $folder.length ; j ++) {
                    $folder[j].classList.add('folder-arrow-click')
                }
                $folderSpan[0].innerHTML = `${folderArray[1]}`;
                $folderSpan[1].innerHTML = `${folderArray[1]}`;
                
            }
                $workoutOverflowContainer.classList.toggle('workout-height-unset');
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

 goWorkoutContainerTop();
    function goWorkoutContainerTop() {
        for (let i = 0; i< $workout.length; i++) {
            $workout[i].addEventListener('click', ()=>{
                clickWorkoutIndex();
            })
        }
        function clickWorkoutIndex() {
            goWorkoutTop = window.scrollTo(0,window.scrollY + $mainWorkout.getBoundingClientRect().top)
        }
    }