class dextgameLevelOne extends Phaser.Scene{
  constructor(){
    super({key:"levelOne"});
  }

  preload(){
    //Used for load music and pictures
    this.load.image('brush', 'www/img/brush1.png');
    touchCounter = 2;
    began1 = false;
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

    var tracer1 = new tracer(squarePoints);
    var tracer2 = new tracer(trianglePoints);

    //Finds the point that the player is starting nearest on the shape
    this.input.on('pointerdown', function (pointer1){
      var x = pointer1.x;
      var y = pointer1.y;
      tracer1.findStartingPoint(x, y, tracer1.array);
      text.setText([tracer1.startingPoint, tracer1.indexOfNextPoint]);
    }, this);

    //Allows user to draw when pressing finger down
    this.input.on('pointermove', function (pointer1) {

      //This can be used as an anti-cheating method
      // this.input.on('pointerup', function (pointer1){
      //   this.scene.start("pauseScreen");
      // }, this);
      if (pointer1.isDown){
        if (!tracer1.checkedDirection){
          var x = pointer1.x;
          var y = pointer1.y;
          tracer1.findDirectionAndNextPoint(x, y, tracer1.array);
          tracer1.checkedDirectionCounter ++;
          if (tracer1.checkedDirectionCounter == 30)
            tracer1.checkedDirection = true;
        }

        this.add.image(pointer1.x, pointer1.y, 'brush');

        var x = pointer1.x;
        var y = pointer1.y;
        tracer1.traceUserTouch(x, y, tracer1.array);
      }
    }, this);


    // Finds the point that the player is starting nearest on the shape
    this.input.on('pointerdown', function (pointer2){
      var x = pointer2.x;
      var y = pointer2.y;
      tracer2.findStartingPoint(x, y, tracer2.array);
      text2.setText([tracer2.startingPoint, tracer2.indexOfNextPoint]);
    }, this);

    // Allows user to draw when pressing finger down
    this.input.on('pointermove', function (pointer2) {

      //This can be used as an anti-cheating method
      // this.input.on('pointerup', function (pointer1){
      //   this.scene.start("pauseScreen");
      // }, this);
      if (pointer2.isDown){
        //Timer code
        timeText.setText('Time: ' + timer + '\nDelta: ');

        if (!tracer2.checkedDirection){
          var x = pointer2.x;
          var y = pointer2.y;
          tracer2.findDirectionAndNextPoint(x, y, tracer2.array);
          tracer2.checkedDirectionCounter++;
          if (tracer2.checkedDirectionCounter == 30)
            tracer2.checkedDirection = true;
        }

        this.add.image(pointer2.x, pointer2.y, 'brush');

        var x = pointer2.x;
        var y = pointer2.y;
        tracer2.traceUserTouch(x, y, tracer2.array);
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
