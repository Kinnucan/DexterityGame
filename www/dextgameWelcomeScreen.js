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
    this.input.addPointer(2);
    text = this.add.text(20,20, 'Welcome! Place Two Fingers Down To Begin');
    this.input.on('pointerdown', function (pointer1) {touchCounter++;}, this);
    // this.scene.start("playScreen");
    // this.input.on('pointerdown', function (pointer1) {touchCounter++;}, this);
    // this.input.on('pointerdown', function (pointer2) {touchCounter++;}, this);
    // if (this.input.on('pointerdown', function(pointer1){}, this) || this.input.on('pointerdown', function(pointer2){}, this)){
    //   this.scene.start('pauseScreen');
    // }
  }

  update(){
    //is a loop that runs constantly
    if (touchCounter == 2){
      this.scene.start("playScreen");
    }
    //fix the following loop so that playScreen is triggered when both fingers are touching the screen
    // if (this.input.pointer1.isDown && this.input.pointer2.isDown){
    //   graphics.clear();
    //   this.scene.start("playScreen");
    // }



  }
}
