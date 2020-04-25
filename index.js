const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)

let currentOffset = 0;
let duration;
//passing the additional callback functions to tell the outside world,
//in our case the graphic function, the events happening inside our class
//This can be done by using callback funtions while creating an object
const timer = new Timer(durationInput, startButton, pauseButton,{
    onStart(totalDuration){
        duration = totalDuration;
        circle.setAttribute('stroke-dasharray', perimeter)
    },
    onClick(timeRemaining){
        console.log('Timer just ticked down');
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete(){
        console.log('Timer is completed');
    }
});



