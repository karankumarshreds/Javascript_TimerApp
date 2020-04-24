class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onClick = callbacks.onClick;
            this.onComplete = callbacks.onComplete;
        }
        //onclick
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

    }
    //we are using the arrow function so that the scope 
    //of 'this' is actually global, which means it represents
    //the actual instance of the timer class and not the 
    //element alone so that we could use the other properties
    //and methods of the TIMER class!

    start = () => {
        if (this.onStart){
            this.onStart();
        };
        //start function handles the time given by the user and 
        //invokes the tick method to start ticking
        this.tick() //since the below method will start ticking 
        //after a second has been passed so manually invoking
        this.interval = setInterval(this.tick, 1000);
        //this.interval because to share values inbetween methods,
        //we need to use instance variables. Hence this.interval &
        //not 'const timer '
    };
 
    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        //pulling the value written by the user
        //setting function   //getting function
        // const value = this.durationInput.value;
        // this.durationInput.value = value - 1;
        // set func = <value: time>
        if (this.timeRemaining === 0){
            this.pause();
            if (this.onComplete){
                this.onComplete();
            }
        } else{
            this.timeRemaining = this.timeRemaining -1;
            if (this.onClick){
                this.onClick();
            }
        }
    };

    //similar to a function but you won't have to call it using ()
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time){
        return this.durationInput.value = time;
    };

}
