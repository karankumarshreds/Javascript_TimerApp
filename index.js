class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        //onclick
        this.startButton.addEventListener('click', this.start);
    }
    //we are using the arrow function so that the scope 
    //of 'this' is actually global, which means it represents
    //the actual instance of the timer class and not the 
    //element alone so that we could use the other properties
    //and methods of the TIMER class!
    start = () => {
        console.log(this);
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
