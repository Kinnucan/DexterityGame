class dextgameLevelOne extends Phaser.Scene{
  constructor(){
    super({key:"levelOne"});
    this.winCondition;
    this.timer1;
    this.timer2;
  }

  preload(){
    //Used for load music and pictures
    this.load.image('brush', 'www/img/brush1.png');
    touchCounter = 2;
  }

  create(){
    //create objects
    var pointer = this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome to Level: '+ userLevel+'!');

    text2 = this.add.text(300,20, 'Text2');
    timeText1 = this.add.text(40, 40, 'Left: ');
    timeText2 = this.add.text(500, 40, 'Right: ');
    var scoreText = this.add.text(300, 50, 'Score: ' + score);


    //picks a shape from the shape database and checks to make sure we have not used this shape yet.
    leftShape = shapeList[Math.floor(Math.random() * shapeList.length)];
    // while(leftShape.hasUsed == true){
    //   leftShape = shapeList[Math.floor(Math.random() * shapeList.length)];
    // }

    //picks a shape from the shape database and checks
    //to make sure the two randomly picked shapes are not the same shape
    //and checks to make sure we have not used this shape yet
    rightShape = shapeList[Math.floor(Math.random() * shapeList.length)];
    while (rightShape.name == leftShape.name){
      rightShape = shapeList[Math.floor(Math.random() * shapeList.length)];
    }
    //
    // while (rightShape.name == leftShape.name && rightShape.hasUsed == true){
    //   rightShape = shapeList[Math.floor(Math.random() * shapeList.length)];
    // }

    //marks the two shapes as used
    leftShape.hasUsed = true;
    rightShape.hasUsed = true;

    var leftGraphics = this.strokeShape(leftShape.shapePoints);
    var rightGraphics = this.strokeShape(rightShape.shapePoints);

    leftGraphics.setPosition(150, 250);
    rightGraphics.setPosition(550, 250);

    var tracer1 = new Tracer(leftShape.shapePoints, leftGraphics);
    var tracer2 = new Tracer(rightShape.shapePoints, rightGraphics);

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
        avg = total/2;
        perc = (avg/total)*100;
        score = perc - ((diff)/total)*100;
        scoreText.setText([diff, total, avg, perc, score]);

        if (pointer.pointerId == tracer1.pointerID){
          tracer1.trace(x, y);
          timeText1.setText('Left: ' + [timer1]);
          this.timer1 = timer1;
        }
        else if (pointer.pointerId == tracer2.pointerID){
          tracer2.trace(x, y);
          timeText2.setText('Right: ' + [timer2]);
          this.timer2 = timer2;
        }

        this.add.image(x, y, 'brush').setScale(0.5);

        if (tracer1.pathFinished && tracer2.pathFinished)
          this.winCondition = true;
      }


    }, this);
  }

  strokeShape(shapePoints){
    var graphics = this.add.graphics();
    graphics.lineStyle(5, 0xFF000, 1.0);
    graphics.beginPath();
    for (var i = 0; i < shapePoints.length; i += 2) {
      var lineOp = (i == 0) ? "moveTo" : "lineTo";
      graphics[lineOp](shapePoints[i], shapePoints[i+1]);
    }
    graphics.closePath();
    graphics.stroke();
    return graphics;
  }

  // advanceToNewLevel(){
  //   //Pseudocode that determines when the user wins the level they are playing
  //   if(userScore >= winThreshHold){
  //     // userWin = true;
  //     this.scene.restart(true, false, {level: this.level+1});
  //   }else {
  //     //else if the user does not
  //     this.scene.restart(true,false{level: this.level});
  //   }
  //
  // }

  update(time){
    //is a loop that runs constantly

    //Sets timer var equal to time
    timer1 = time;
    timer2 = time;
    total = (130000-this.timer1) + (130000-this.timer2);
    diff = Phaser.Math.Difference(this.timer1, this.timer2);


    if (touchCounter < 2){
      // this.scene.pause();
      // this.scene.launch("pauseScreen");
      this.scene.start("pauseScreen");
    }

    if (this.winCondition){
      this.winCondition = false;
      userLevel += 1;
      this.scene.start("levelOne");
    }

  }

}
