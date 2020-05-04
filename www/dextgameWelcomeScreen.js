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

    //For circle/square
    // graphics = this.add.graphics({ fillStyle: { color: 0x9400D3 } });

    //For line, color = purple
    // graphics = this.add.graphics({ lineStyle: { width: 4, color: 0x9400D3 } });
    //For line, color = neon green
    // graphics = this.add.graphics({ lineStyle: { width: 6, color: 0xFF000 } });
    //
    // var started = false;
    // var prevX;
    // var prevY;
    //
    // this.input.on('pointermove', (pointer) => {
    //     var x = pointer.x;
    //     var y = pointer.y;
    //     // if (started){
    //     //   var line = new Phaser.Geom.Line(prevX, prevY, x, y);
    //     //   graphics.strokeLineShape(line);
    //     // }
    //     // if (!started){
    //     //   started = true;
    //     // }
    //     // prevX = x;
    //     // prevY = y;
    //
    //     // var circle = new Phaser.Geom.Rectangle(x, y, 10, 10);
    //     // graphics.fillRectShape(circle);
    // }, this);
    // graphics = this.add.graphics({ fillStyle: { color: 0x9400D3 } });
    //
    // this.input.on('pointermove', (pointer) => {
    //     var x = pointer.x;
    //     var y = pointer.y;
    //     var circle = new Phaser.Geom.Circle(x, y, 8);
    //     graphics.fillCircleShape(circle);
    // }, this);

    this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome! Place Two Fingers Down To Begin');
    text.setColor('aqua');
    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);
  }

  update(){
    //is a loop that runs constantly
    if (touchCounter == 2){
      this.scene.start("rulesScreen");
    }
  }

}
