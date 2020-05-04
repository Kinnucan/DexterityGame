class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
  }

  preload(){
    //Used for load music and pictures
    // this.scene.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // this.scene.scale.forceOrientation(false, true);


  }

  create(){
    this.scene.scale.on('orientationchange', function(orientation){
      if(this.scene.scale.isLandscape){
        document.getElementById("turn").style.display="block";
      }
    });


    // this.scene.scale.lockOrientation('landscape');

    // var orientation = this.scene.scale.orientation;
    // this.scale.lockOrientation('landscape');
    // this.scale.on('resize', function(gameSize, baseSize, displaySize, resolution, previousWidth, previousHeight) {
    //   this.scene.scale.resize(window.innerWidth, window.innerHeight);
    // });
    // this.gameScale.setMode('resize');
    // this.scene.gameScale.setMode('resize')
    // this.scale.on('resize', resize, this);
    // this.scene.scale.resize(window.innerWidth, window.innerHeight);





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
