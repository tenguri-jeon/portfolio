const $workoutOverflowContainer= document.getElementsByClassName('workout-overflow-container');
let $workoutExplane = document.getElementsByClassName('work-out-explane');
let workoutWidth;

workoutSize();
window.addEventListener('resize', ()=>{
    workoutSize()
    console.log(workoutWidth);
});

function workoutSize(){
    workoutWidth = $workoutOverflowContainer[0].clientWidth; 
    for (let i = 0; i < $workoutExplane.length; i++) {
        $workoutExplane[i].style.width = `${workoutWidth}px`;
    }
}
