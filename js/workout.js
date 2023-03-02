const $workoutIndex = document.getElementsByClassName('workout-index');
const $workOutExplane = document.getElementsByClassName('work-out-explane');
const $folder = document.getElementsByClassName('folder');


for(let i = 0 ; i < $workoutIndex.length ; i++ ){
    $workoutIndex[i].addEventListener('click', ()=>{
        resetIndex();
        $workoutIndex[i].classList.add('pick-index');
        $workOutExplane[i].classList.add('workout-display')
    })
}

function resetIndex(){
    for(let i = 0 ; i < $workoutIndex.length ; i ++){
        $workoutIndex[i].classList.remove('pick-index');
        $workOutExplane[i].classList.remove('workout-display');
    }
}

$folder.addEventListener('toggle' , ()=>{

    for (let i = 0; i < $folder.length; i++) {
        $folder[i].classList.add('folder-arrow-click');
    }

})
