class dextgameLevelOne extends Phaser.Scene{
  constructor(){
    super({key:"levelOne"});
  }

  preload(){
    //Used for load music and pictures
    this.load.image('brush', 'www/img/brush1.png');
    touchCounter = 2;
  }

  create(){
    //create objects
    graphics = this.add.graphics();
    var pointer1 = this.input.addPointer(1);
    var pointer2 = this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome to Level One!');
    text2 = this.add.text(300,20, 'Text2');
    timeText = this.add.text(40, 40);

    graphics.lineStyle(5, 0x0000FF, 1.0);
    graphics.strokeRect(105, 250, 100, 100);
    graphics.strokeTriangle(390, 350, 465, 250, 540, 350);

    var squarePoints = [105, 250, 205, 250, 205, 350, 105, 350];
    var trianglePoints = [407.5, 350, 465, 250, 522.5, 350];

    var tracer1 = new Tracer(squarePoints);
    var tracer2 = new Tracer(trianglePoints);

    for (var tracer of [tracer1, tracer2]) {
      tracer.onPointReached = (x, y) => {
        this.add.image(x, y, 'brush');
      };
    }

    //Finds the point that the player is starting nearest on the shape
    this.input.on('pointerdown', (pointer1) => {
      var x = pointer1.x;
      var y = pointer1.y;

      tracer1.start(x, y);
    }, this);

    //Allows user to draw when pressing finger down
    this.input.on('pointermove', function (pointer1) {
      //This can be used as an anti-cheating method
      // this.input.on('pointerup', function (pointer1){
      //   this.scene.start("pauseScreen");
      // }, this);
      if (pointer1.isDown){
        var x = pointer1.x;
        var y = pointer1.y;

        tracer1.trace(x, y);

        this.add.image(x, y, 'brush').setScale(0.3);
      }
    }, this);
  }

  update(time){
    //is a loop that runs constantly

    //Sets timer var equal to time
    timer = time;

    if (touchCounter < 2){
      // this.scene.pause();
      // this.scene.launch("pauseScreen");
      this.scene.start("pauseScreen");
    }
  }

}
