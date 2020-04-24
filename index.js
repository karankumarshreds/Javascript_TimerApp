const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

//passing the additional callback functions to tell the outside world,
//in our case the graphic function, the events happening inside our class
//This can be done by using callback funtions while creating an object
const timer = new Timer(durationInput, startButton, pauseButton,{
    onStart(){
        console.log('Timer started');
    },
    onClick(){
        console.log('Timer just ticked down');
    },
    onComplete(){
        console.log('Timer is completed');
    }
});



