class dextgameGameScreen extends Phaser.Scene{
  constructor(){
    super({key:"gameScreen"});
    this.timer1;
    this.timer2;
  }

  preload(){
    //Used for load music and pictures
    this.load.image('brush', 'img/brush1.png');
    this.load.image('flares', 'assets/particles/blue.png');
    touchCounter = 2;
    score = 0;
    // this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
  }

  create(){
    //create objects



    var pointer = this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome to Level ' + userLevel + '!');
    text2 = this.add.text(300,20, '');
    timeText1 = this.add.text(40, 40, 'Left Timer: ');
    timeText2 = this.add.text(500, 40, 'Right Timer: ');
    scoreText = this.add.text(300, 50, 'Score: ' + Math.floor(score));
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

    var leftGraphics = this.strokeShape(leftShape.shapePoints, 0x0000FF);
    var rightGraphics = this.strokeShape(rightShape.shapePoints, 0xFF0000);

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
        var particles = this.add.particles('flares');
        // particles.setScale(0.1);
        var emitter = particles.createEmitter();
        emitter.setPosition(x, y);
        // emitter.emitParticleAt(x,y);
        emitter.setLifespan(1000);
        emitter.setAlpha(0.5);
        emitter.setSpeed(50);
        // emitter.setRadius(0.2);
        emitter.setScale(0.2);
        emitter.setBlendMode(Phaser.BlendModes.ADD);




        // emitter.makeParticles('flares');
        // particles.emitParticles(50, x,y);
        // var circleOne = new Phaser.Geom.Circle(x, y, 20);
        // graphicsDrawing.fillCircleShape(circleOne);

        // this.add.image(x, y, 'brush').setScale(0.5);
      };
    }
    //Finds the point that the player is starting nearest on the shape
    this.input.on('pointerdown', (pointer) => {
      var x = pointer.x;
      var y = pointer.y;

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

      this.input.on('pointerup', (pointer) => {
        if (pointer.pointerId == tracer1.pointerID){
          touchCounter--;
        }
        else if (pointer.pointerId == tracer2.pointerID){
          touchCounter--;
        }
      }, this);

    }, this);

    //Allows user to draw when pressing finger down
    this.input.on('pointermove', (pointer) => {
      if (pointer.isDown){
        var x = pointer.x;
        var y = pointer.y;

        avg = total/2;
        perc = (avg/130000)*100;
        score = perc - ((diff)/total)*100;

        scoreText.setText(["Diff: " + diff, "Total: "+ total, "AVG: "+avg, "Perc: "+perc, "Score: "+score]);


        if (pointer.pointerId == tracer1.pointerID){
          tracer1.trace(x, y);
          timeText1.setText('Left: ' + Math.floor([timer1]));
          this.timer1 = timer1;
          this.add.image(x, y, 'brush').setScale(0.5).setAlpha(0.3).setTint(0xFF000);
          // text.setText([tracer1.nextPoint, tracer.currentPoint, x, y]);
        }
        else if (pointer.pointerId == tracer2.pointerID){
          tracer2.trace(x, y);
          timeText2.setText('Right: ' + Math.floor([timer2]));
          this.timer2 = timer2;
          this.add.image(x, y, 'brush').setScale(0.5).setAlpha(0.3).setTint(0x9400D3);
        }

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

  strokeShape(shapePoints, color){
    var graphics = this.add.graphics();
    graphics.lineStyle(5, color, 1.0);
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

    // text.setText([touchCounter]);

    //Sets timer var equal to time
    timer1 = time;
    timer2 = time;
    total = (130000-this.timer1) + (130000-this.timer2);
    diff = Phaser.Math.Difference(this.timer1, this.timer2);

    // this.input.on('pointerup', function (pointer) {touchCounter--;}, this);
    if (touchCounter < 2){
      this.scene.start("loseScreen");
    }

    if (winCondition){
      // this.add.text(20,500, sceneChangeCondition);
      // winCondition = false;
      // userLevel += 1;
      cumulativeScore += score;
      // if (){
      //
      // }
      this.scene.start("scoreScreen");
    }
  }

}
