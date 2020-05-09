class dextgameGameScreen extends Phaser.Scene{
  constructor(){
    super({key:"gameScreen"});
    this.timerLeft;
    this.timerRight;
  }

  preload(){
    //Used for load music and pictures
    //loads images that will use to show the users tracing
    //and indicate when the user is on the right track
    //we also load the touchCOunter, an variable that will track how many
    //fingers are on the screen, and set it to 2 as the only way for the user
    //to get to this screen is by having two fingers pressed down on the screen.
    //we also set the score to zero at the beginning so that when the game loads
    //the next level, the game will not start from the users previous score (ie
    //when the user starts level two, they will start at 100 and go down rather
    //than starting at 82 on going from there)
    this.load.image('brush', 'img/brush1.png');
    this.load.image('flares', 'assets/particles/blue.png');
    this.load.image('tileback', 'assets/particles/star2.jpg');
    touchCounter = 2;
    score = 0;
  }

  create(){
    //create objects
    //Add images to the screen and set their depth
    this.add.image(400, 300, 'tileback').setScale(0.6).setDepth(-20);
    this.back = this.add.tileSprite(0,0,5000,5000, 'tileback').setScale(0.8).setDepth(-20);
    //since phaser automatically sets up one pointer to be active, we use the
    //following lines to add a second pointer.
    var pointer = this.input.addPointer(1);
    //add welcome text and set the color
    text = this.add.text(20,20, 'Welcome to Level ' + userLevel + '!');
    text.setColor('aqua');
    //we also add the left and right timers to the winScreen
    timeTextLeft = this.add.text(40, 40, 'Left Timer: ');
    timeTextRight = this.add.text(500, 40, 'Right Timer: ');

    //we create and add the drawing graphics that will adds graphics to the screen
    var graphicsDrawing = this.add.graphics({ fillStyle: { color: 0x9400D3 } });

    //picks a random shape from the shape database and checks to make sure we
    //have not used this shape yet. This is done by picking a radnom whole number
    //between 0 and the maximum length of the shapelist array, and sets those
    //numbers to the index variables.
    //Then we use one index to pick the left shape. Then we check to make sure
    //that we have not used that shape yet, and if we have we use a while loop
    //that will not end until we've the random index variable lands on a shape
    //that we have not used.
    var indexLeft = Math.floor(Math.random() * shapeList.length);
    var indexRight = Math.floor(Math.random() * shapeList.length);

    leftShape = shapeList[indexLeft];
    while(leftShape.hasUsed == true){
      indexLeft = Math.floor(Math.random() * shapeList.length);
      leftShape = shapeList[indexLeft];
    }

    //picks a random shape from the shape database and checks
    //to make sure the two randomly picked shapes are not the same shape
    //and checks to make sure we have not used this shape yet
    rightShape = shapeList[indexRight];
    while (rightShape.name == leftShape.name || rightShape.hasUsed == true){
      indexRight = Math.floor(Math.random() * shapeList.length);
      rightShape = shapeList[indexRight];
    }

    //After we pick our two shapes, we change their boolean statment to true so
    //so that when game screen runs again on future levels, the game will know
    //these shapes have been used.
    shapeList[indexLeft].hasUsed = true;
    shapeList[indexRight].hasUsed = true;

    //Draws the shapes on screen using the shapes array list of corrdinates
    //and drawing lines between each point.
    var leftGraphics = this.strokeShape(leftShape.shapePoints, 0x0000FF);
    var rightGraphics = this.strokeShape(rightShape.shapePoints, 0xFF0000);

    //since their origin is at 0, 0, we moved the shapes to the designated leftShape
    //and right positions. This gives the game more uniform.
    leftGraphics.setPosition(150, 250);
    rightGraphics.setPosition(550, 250);

    //Allows the User to draw *over* the shapes
    leftGraphics.setDepth(-10);
    rightGraphics.setDepth(-10);

    //creates two tracing variables, calling the tracing alorigthm and the
    //shapes list of points, and the occompaning graphic
    var tracer1 = new Tracer(leftShape.shapePoints, leftGraphics);
    var tracer2 = new Tracer(rightShape.shapePoints, rightGraphics);

    for (var tracer of [tracer1, tracer2]){
      tracer.onPointReached = (x, y) =>{
        var particles = this.add.particles('flares');
        var emitter = particles.createEmitter();
        emitter.setLifespan(200);
        emitter.setAlpha(0.5);
        emitter.setSpeed(240);
        emitter.setScale(0.2);
        emitter.setBlendMode(Phaser.BlendModes.ADD);
        this.add.image(x, y, 'brush').setScale(0.8).setDepth(-20).setTint(0xFFA500);
        emitter.explode(60, x, y)
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

        if (pointer.pointerId == tracer1.pointerID){
          tracer1.trace(x, y);
          timeTextLeft.setText('Left: ' + Math.floor([this.timerLeft-accumulatedLeftTime]));
          var userTrail = this.add.image(x, y, 'brush').setScale(0.5).setAlpha(0.3).setTint(0xFF000);
          this.tweens.add({
            targets: userTrail,
            alpha: 0,
            duration: 2500,
            ease: 'Power2'
          }, this);
        }
        else if (pointer.pointerId == tracer2.pointerID){
          tracer2.trace(x, y);
          timeTextRight.setText('Right: ' + Math.floor([this.timerRight-accumulatedRightTime]));
          var userTrail = this.add.image(x, y, 'brush').setScale(0.5).setAlpha(0.3).setTint(0x9400D3);
          this.tweens.add({
            targets: userTrail,
            alpha: 0,
            duration: 2500,
            ease: 'Power2'
          }, this);
        }

        if (tracer1.pathFinished && tracer2.pathFinished){
          if (score >= 80){
            sceneChangeCondition=0;
          }
          else{
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
    for (var [i, point] of shapePoints.entries()) {
      var lineOp = (i == 0) ? "moveTo" : "lineTo";
      graphics[lineOp](point[0], point[1]);
    }
    graphics.closePath();
    graphics.stroke();
    return graphics;
  }

  update(time){
    checkOriention(window.innerWidth, window.innerHeight);
    this.back.tilePositionX +=0.5;
    //Sets timer var equal to time
    this.timerLeft = time;
    this.timerRight = time;
    total = (130000-(-accumulatedLeftTime)) + (130000-(this.timerRight-accumulatedRightTime));
    diff = Phaser.Math.Difference((this.timerLeft-accumulatedLeftTime), (this.timerRight-accumulatedRightTime));

    if (touchCounter < 2){
      this.scene.start("loseScreen");
    }

    if (winCondition){
      cumulativeScore += score;
      completedShapes += 2;
      accumulatedLeftTime = time;
      accumulatedRightTime = time;
      if (completedShapes == shapeList.length && score >= 80){
        this.scene.start("winScreen");
      }
      else
        this.scene.start("scoreScreen");
    }
  }

}
