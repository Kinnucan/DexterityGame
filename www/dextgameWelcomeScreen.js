class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
  }

  preload(){
    //Used for load music and pictures

  }

  create(){
    // window.addEventListener('resize', resize);
    // resize();

    touchCounter = 0;
    //create objects
    // graphics = this.add.graphics({ fillStyle: { color: 0x9400D3 } });
    // var circle = new Phaser.Geom.Circle(200, 200, 80);
    //
    // graphics.fillCircleShape(circle);

    // this.input.on('pointermove', (pointer) => {
    //     var x = pointer.x;
    //     var y = pointer.y;
    //     var circle = new Phaser.Geom.Rectangle(x, y, 10, 10);
    //     graphics.fillRectShape(circle);
    // }, this);

    // var pointer1 = this.input.addPointer();
    // var pointer2 = this.input.addPointer();
    this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome! Place Two Fingers Down To Begin');
    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);
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
      // this.scene.start("scoreScreen");
      this.scene.start("rulesScreen");
    }
  }

}
