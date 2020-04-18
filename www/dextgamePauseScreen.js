class dextgamePauseScreen extends Phaser.Scene{
  constructor(){
    super({key:"pauseScreen"});
  }


  preload(){

  }

  create(){
    touchCounter = 0;
    //create objects
    graphics = this.add.graphics();
    this.input.addPointer(1);
    text = this.add.text(10,10, 'You Are Loosed! Place Two Fingers on the screen to start again!');
    this.input.on('pointerdown', function (pointer1) {touchCounter++;}, this);
    // this.input.on('pointerdown', function (pointer2) {touchCounter++;}, this);

  }

  update(){
    //is a loop that runs constantly
    if (touchCounter == 2){
      // this.scene.resume("levelOne");
      // this.scene.stop();
      // graphics.clear();
      this.scene.start("levelOne");
    }

    }
  }


  //Code for timing out the game when one or less fingers are touching the screen
  // setup() {
  //     this.addEventListener("pointer1.isDown", resetTimer, false);
  //     this.addEventListener("pointer2.isDown", resetTimer, false);
  //
  //     startTimer();
  // }
  //
  // startTimer() {
  //     // wait 1 seconds before calling goInactive
  //     timeoutID = window.setTimeout(goInactive, 1000);
  // }
  //
  // resetTimer(e) {
  //     window.clearTimeout(timeoutID);
  //
  //     goActive();
  // }
  //
  // goInactive() {
  //     // do something
  // }
  //
  // goActive() {
  //     // do something
  //
  //     startTimer();
  // }
