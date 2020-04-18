class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
  }

  // init() {
  //   //prepare data
  // }

  preload(){
    //USed for load music and pictures

  }

  create(){
    touchCounter = 0;
    //create objects
    graphics = this.add.graphics();
    // var pointer1 = this.input.addPointer();
    // var pointer2 = this.input.addPointer();
    text = this.add.text(20,20, 'Welcome! Place Two Fingers Down To Begin');
    this.input.on('pointerdown', function (pointer1) {touchCounter++;}, this);
  }

  update(){
    //is a loop that runs constantly
    if (touchCounter >= 2){
      this.scene.start("levelOne");
    }
  }

}
