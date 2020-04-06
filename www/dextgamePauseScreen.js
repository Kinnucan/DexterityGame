class dextgamePauseScreen extends Phaser.Scene{
  constructor(){
    super({key:"pauseScreen"});
  }

  // init() {
  //   //prepare data
  // }

  preload(){
    //USed for load music and pictures

  }

  create(){
    //create objects
    graphics = this.add.graphics();
    this.input.addPointer(1);
    text = this.add.text(10,10, 'You Are Paused');
  }

  update(){
    //is a loop that runs constantly
    if (this.input.pointer1.isDown && this.input.pointer2.isDown){
      graphics.clear();
      this.scene.start("playScreen");

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



}
