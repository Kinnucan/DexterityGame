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
    var pointer = this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome to Level One!');

    text2 = this.add.text(300,20, 'Text2');
    timeText1 = this.add.text(40, 40, 'Left: ');
    timeText2 = this.add.text(500, 40, 'Right: ');

    leftShape = leftShapeList[Math.floor(Math.random() * leftShapeList.length)];
    rightShape = rightShapeList[Math.floor(Math.random() * rightShapeList.length)];

    //checks to make sure the two randomly picked shapes are not the same shape
    while (rightShape.name == leftShape.name){
      rightShape = rightShapeList[Math.floor(Math.random() * rightShapeList.length)];
    }
    rightShape.draw();
    leftShape.draw();

    var tracer1 = new Tracer(leftShape.shapePoints);
    var tracer2 = new Tracer(rightShape.shapePoints);

    for (var tracer of [tracer1, tracer2]){
      tracer.onPointReached = (x, y) =>{
        this.add.image(x, y, 'brush');
      };
    }

    //Finds the point that the player is starting nearest on the shape
    this.input.on('pointerdown', (pointer) => {

      var x = pointer.x;
      var y = pointer.y;

      console.log(pointer);

      if (x <= 400){
        tracer1.start(x, y);
        pointer.pointerId = 1;
        tracer1.pointerID = pointer.pointerId;
      }
      else if (x > 400){
        tracer2.start(x, y);
        pointer.pointerId = 2;
        tracer2.pointerID = pointer.pointerId;
      }

    }, this);

    //Allows user to draw when pressing finger down
    this.input.on('pointermove', (pointer) => {

      //This can be used as an anti-cheating method
      // this.input.on('pointerup', function (pointer1){
      //   this.scene.start("pauseScreen");
      // }, this);
      if (pointer.isDown){
        var x = pointer.x;
        var y = pointer.y;

        if (pointer.pointerId == tracer1.pointerID){
          tracer1.trace(x, y);
          text.setText(['yay']);
          timeText1.setText('Left: ' + [timer1]);
        }
        else if (pointer.pointerId == tracer2.pointerID){
          tracer2.trace(x, y);
          text2.setText(['yay2']);
          timeText2.setText('Right: ' + [timer2]);
        }
        this.add.image(pointer.x, pointer.y, 'brush').setScale(0.5);
      }


    }, this);
  }

  update(time){
    //is a loop that runs constantly

    //Sets timer var equal to time
    timer1 = time;
    timer2 = time;

    if (touchCounter < 2){
      // this.scene.pause();
      // this.scene.launch("pauseScreen");
      this.scene.start("pauseScreen");
    }
  }

}
