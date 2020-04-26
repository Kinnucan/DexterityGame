class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
    this.testText = 'Success';
  }

  preload(){
    //Used for load music and pictures
  }

  create(){
    window.addEventListener('resize', resize);
    resize();

    var testText = new testing.TESTTEXT;

    touchCounter = 0;
    //create objects
    graphics = this.add.graphics();
    // var pointer1 = this.input.addPointer();
    // var pointer2 = this.input.addPointer();
    this.input.addPointer(1);
    text = this.add.text(20,20, );
    this.input.on('pointerdown', function (pointer1) {touchCounter++;}, this);
    // this.input.on('pointerdown', function (pointer2) {touchCounter++;}, this);
    // this.scene.start("playScreen");
    // this.input.on('pointerdown', function (pointer1) {touchCounter++;}, this);
    // this.input.on('pointerdown', function (pointer2) {touchCounter++;}, this);
    // if (this.input.on('pointerdown', function(pointer1){}, this) || this.input.on('pointerdown', function(pointer2){}, this)){
    //   this.scene.start('pauseScreen');
    // }// var pointer1 = this.input.activePointer;
    // var pointer2 = this.input.activePointer;
  }

  update(){
    //is a loop that runs constantly
    if (touchCounter == 2){
      this.scene.start("levelOne");
    }
  }

}
