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

    // text.setText(Phaser.Math.Distance.Between(trianglePoints[0], trianglePoints[1], trianglePoints[2], trianglePoints[3]));
    // text2.setText([Phaser.Math.Distance.Between(trianglePoints[4], trianglePoints[5], trianglePoints[2], trianglePoints[3]),
    //               Phaser.Math.Distance.Between(trianglePoints[0], trianglePoints[1], trianglePoints[4], trianglePoints[5])]);

    var tracer1 = new Tracer();
    var tracer2 = new Tracer();

    var checkedFirstPointer = false;
    var tracer1PointerId;

    for (var tracer of [tracer1, tracer2]){
      tracer.onPointReached = (x, y) =>{
        this.add.image(x, y, 'brush');
        // text2.setText(x);
      };
    }

    // for (var tracer of [tracer1, tracer2]){
    //   tracer.setPath = (num) =>{
    //     if (num == 1)
    //       tracer.path = squarePoints;
    //     else if (num == 2)
    //       tracer.path = trianglePoints;
    //     text.setText([tracer.path]);
    //   };
    // }

    //Finds the point that the player is starting nearest on the shape
    this.input.on('pointerdown', (pointer) => {
      // if (!checkedPointer){
      //   tracer1.pointerID = pointer.pointerId;
      //   checkedPointer = true;
      // }

      var x = pointer.x;
      var y = pointer.y;

      if (x >= 400 && !checkedFirstPointer){
        tracer1.path = rightShape.shapePoints;
        tracer1.pointerID = pointer.pointerId;
        checkedFirstPointer = true;
      }
      else if (x < 400 && !checkedFirstPointer){
        tracer1.path = leftShape.shapePoints;
        tracer1.pointerID = pointer.pointerId;
        checkedFirstPointer = true;
      }

      if (x >= 400 && pointer.pointerId != tracer1.pointerID){
        tracer2.path = rightShape.shapePoints;
        tracer2.pointerID = pointer.pointerId;
      }
      else if (x < 400 && pointer.pointerId != tracer1.pointerID){
        tracer2.path = leftShape.shapePoints;
        tracer2.pointerID = pointer.pointerId;
      }

      // text.setText([x, y]);

      tracer1.start(x, y);
      tracer2.start(x, y);

      // text.setText([tracer1.startingPoint, tracer1.indexOfNextPoint]);
    }, this);

    //Allows user to draw when pressing finger down
    this.input.on('pointermove', (pointer) => {

      //This can be used as an anti-cheating method
      // this.input.on('pointerup', function (pointer1){
      //   this.scene.start("pauseScreen");
      // }, this);
      if (pointer.isDown){


        //timeText1.setText('Left: ' + [timer1]);
        //timeText2.setText('Right: ' + [timer2]);
        var x = pointer.x;
        var y = pointer.y;

        if (pointer.pointerId == tracer1.pointerID){
          tracer1.trace(x, y);
          timeText1.setText('Left: ' + [timer1]);
        }
        else if (pointer.pointerId == tracer2.pointerID){
          tracer2.trace(x, y);
          timeText2.setText('Right: ' + [timer2]);
        }
        this.add.image(pointer.x, pointer.y, 'brush').setScale(0.5);
      }


    }, this);
  }

  update(time){
    //is a loop that runs constantly

    //Sets timer var equal to time
    timer1= time;
    timer2 = time;

    if (touchCounter < 2){
      // this.scene.pause();
      // this.scene.launch("pauseScreen");
      this.scene.start("pauseScreen");
    }
  }

}
