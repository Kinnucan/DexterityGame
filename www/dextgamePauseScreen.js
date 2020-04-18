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
    // this.input.addPointer(1);
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
      this.scene.start("welcomeScreen");
    }

    }
  }
