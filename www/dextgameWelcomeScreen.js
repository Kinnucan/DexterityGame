class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
  }

  preload(){
    //Used for load music and pictures

  }

  create(){
    // this.scale.on('resize', resize, this);
    // this.gameScale.setMode('resize');
    // this.scene.gameScale.setMode('resize');





    touchCounter = 0;
    //create objects
    // const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    // const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome! Place Two Fingers Down To Begin');
    text.setColor('aqua');
    // text.setOrigin(5);
    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);
  }

  update(){
    //is a loop that runs constantly
    if (touchCounter == 2){
      this.scene.start("rulesScreen");
    }
  }

}
