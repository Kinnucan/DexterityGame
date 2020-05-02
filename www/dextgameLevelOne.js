class dextgameLevelOne extends Phaser.Scene{
  constructor(){
    super({key:"levelOne"});
    // this.winCondition;
    this.timer1;
    this.timer2;
  }

  preload(){
    //Used for load music and pictures
    // this.load.image('brush', 'www/img/brush1.png');
    touchCounter = 2;
    this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
  }

  create(){
    //create objects
    var pointer = this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome to Level: '+ userLevel+'!');
    text2 = this.add.text(300,20, '');
    timeText1 = this.add.text(40, 40, 'Left Timer: ');
    timeText2 = this.add.text(500, 40, 'Right Timer: ');
    scoreText = this.add.text(300, 50, 'Score: ' + score);
    var graphicsDrawing = this.add.graphics({ fillStyle: { color: 0x9400D3 } });


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

    //Allows the User to draw *over* the shapes
    leftGraphics.setDepth(-10);
    rightGraphics.setDepth(-10);

    var tracer1 = new Tracer(leftShape.shapePoints, leftGraphics);
    var tracer2 = new Tracer(rightShape.shapePoints, rightGraphics);

    for (var tracer of [tracer1, tracer2]){
      tracer.onPointReached = (x, y) =>{
        //TODO: Change these to sparks
        // particles = this.add.particles('flares');
        // particles.createEmitter({
        //   frame: ['red', 'yellow', 'green'],
        //   x: x, y:y,
        //   lifespan:200,
        //   speed: {min: 100, max:250},
        //   scale: {start: 0.4, end:0},
        //   blendMode: 'ADD'
        // });
        var circleOne = new Phaser.Geom.Circle(x, y, 20);
        graphicsDrawing.fillCircleShape(circleOne);

        // this.add.image(x, y, 'brush');
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
        perc = (avg/130000)*100;
        score = perc - ((diff)/total)*100;
        // scoreText.setText("Score: "+ Math.floor(score));
        scoreText.setText(["Diff: " + diff, "Total: "+ total, "AVG: "+avg, "Perc: "+perc, "Score: "+score]);

        if (pointer.pointerId == tracer1.pointerID){
          tracer1.trace(x, y);
          timeText1.setText('Left: ' + Math.floor([timer1]));
          this.timer1 = timer1;
        }
        else if (pointer.pointerId == tracer2.pointerID){
          tracer2.trace(x, y);
          timeText2.setText('Right: ' + Math.floor([timer2]));
          this.timer2 = timer2;
        }

        // this.add.image(x, y, 'brush').setScale(0.5);
        var circleTwo = new Phaser.Geom.Circle(x, y, 5);
        graphicsDrawing.fillCircleShape(circleTwo);

        if (tracer1.pathFinished && tracer2.pathFinished){
          if (score >= 80){
            // this.winCondition = true;
            sceneChangeCondition=0;
          }
          else{
            // this.add.text(300,200, 'YOU LOSE!');
            // this.winCondition = true;
            sceneChangeCondition = 1;

          }
          winCondition = true;
        }
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

    // this.input.on('pointerup', function (pointer) {touchCounter--;}, this);
    if (touchCounter < 2){
      // this.scene.pause();
      // this.scene.launch("pauseScreen");
      this.scene.start("pauseScreen");
    }

    if (winCondition){
      // this.add.text(20,500, sceneChangeCondition);
      // winCondition = false;
      // userLevel += 1;
      this.scene.start("scoreScreen");
    }
  }

}
