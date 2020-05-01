class dextgamePlayScreen extends Phaser.Scene{
  constructor(){
    // super('welcomeScreen');
    super({key:"playScreen"});
  }

  preload(){
    //USed for load music and pictures

  }

  create(){
    //create objects
    while (userWin == false){
      this.scene.run("levelOne");
    }

  }

  update(){
    //is a loop that runs constantly

  }

}



// //checks to see if only one finger is done--TODO: need to edit this
// if (this.input.pointer1.isDown || this.input.pointer2.isDown){
//   graphics.clear();
//   // this.scene.start("pauseScreen");
//
// }
// text.setText([
//         'hello',
//         'pointer1.isDown: ' + this.input.pointer1.isDown,
//         'pointer2.isDown: ' + this.input.pointer2.isDown,
//
//     ]);
//
//     graphics.fillStyle(0xff0000, 1);
//     graphics.fillRect(this.input.pointer1.x, this.input.pointer1.y, 64, 64);
//
//     graphics.fillStyle(0x00ff00, 1);
//     graphics.fillRect(this.input.pointer2.x, this.input.pointer2.y, 64, 64);
//
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
