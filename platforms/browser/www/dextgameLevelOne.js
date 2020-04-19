class dextgameLevelOne extends Phaser.Scene{
  constructor(){
    super({key:"levelOne"});
  }

  preload(){
    //USed for load music and pictures
    this.load.image('brush', 'www/img/logo.png');
    touchCounter = 2;

  }

  create(){
      //create objects
      graphics = this.add.graphics();
      this.input.addPointer(1);
      text = this.add.text(20,20, 'Welcome to Level One!');
      textScoreLeft = this.add.text(20,50, 'Start');
      textScoreRight = this.add.text(350,50, 'Start');

      // this.add.sprite(0,0, 'brush');

      graphics.lineStyle(5, 0x0000FF, 1.0);
      graphics.strokeRect(105, 250, 100, 100);
      graphics.strokeTriangle(390, 350, 465, 250, 540, 350);

      var squarePoints = [105, 250, 205, 250, 205, 350, 105, 350];
      var trianglePoints = [390, 350, 465, 250, 540, 350];

      var checkedDirectionCounter1 = 0;
      var checkedDirectionCounter2 = 0;

      //Finds the point that the player is starting nearest on the shape
      this.input.on('pointerdown', function (pointer1){
        var x = pointer1.x;
        var y = pointer1.y;
        var points = this.findStartingPoint(x, y, squarePoints, distHolder1);
        startingPoint1 = points[0];
        arrayPosition1 = points[1];
        textScoreLeft.setText([arrayPosition1])
      }, this);

      //Allows user to draw when pressing finger down
      this.input.on('pointermove', function (pointer1) {

        //This can be used as an anti-cheating method
        // this.input.on('pointerup', function (pointer1){
        //   this.scene.start("pauseScreen");
        // }, this);

        if (pointer1.isDown){
          // userStrokeLineLeft = this.add.image(pointer1.x, pointer1.y, 'brush', Phaser.Math.Between(0,5));
          if (checkedDirection1 != true){
            if (arrayPosition1 == squarePoints.length-2){
              if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[0], squarePoints[1]) < Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[arrayPosition1-2], squarePoints[arrayPosition1-1])){
                direction1 = 1;
                nextPoint1 = [squarePoints[0], squarePoints[1]];
              }
              if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[0], squarePoints[1]) > Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[arrayPosition1-2], squarePoints[arrayPosition1-1])){
                direction1 = -1;
                nextPoint1 = [squarePoints[arrayPosition1-2], squarePoints[arrayPosition1-1]];
              }
            }
            if (arrayPosition1 == 0){
              if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[arrayPosition1+2], squarePoints[arrayPosition1+3]) < Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[squarePoints.length-2], squarePoints[squarePoints.length-1])){
                direction1 = 1;
                nextPoint1 = [squarePoints[2], squarePoints[3]];
              }
              if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[arrayPosition1+2], squarePoints[arrayPosition1+3]) > Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[squarePoints.length-2], squarePoints[squarePoints.length-1])){
                direction1 = -1;
                nextPoint1 = [squarePoints[squarePoints.length-2], squarePoints[squarePoints.length-1]];
              }
            }
            else{
              if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[arrayPosition1+2], squarePoints[arrayPosition1+3]) < Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[arrayPosition1-2], squarePoints[arrayPosition1-1])){
                direction1 = 1;
                nextPoint1 = [squarePoints[arrayPosition1+2], squarePoints[arrayPosition1+3]];
              }
              else if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[arrayPosition1+2], squarePoints[arrayPosition1+3]) > Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[arrayPosition1-2], squarePoints[arrayPosition1-1])){
                direction1 = -1;
                nextPoint1 = [squarePoints[arrayPosition1-2], squarePoints[arrayPosition1-1]];
              }
            }
            checkedDirectionCounter1++;
            //Makes sure the direction stays set once the user has committed to one
            if (checkedDirectionCounter1 == 10){
              checkedDirection1 = true;
            }
          }
          // userStrokeLineLeft = this.add.image(pointer1.x, pointer1.y, 'brush', Phaser.Math.Between(0,5));
          this.add.image(pointer1.x, pointer1.y, 'brush');

          if (direction1 == 1){
            if (began1 != true){
              point1 = arrayPosition1+2;
              began1 = true;
            }
            if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, nextPoint1[0], nextPoint1[1]) <= 15){
              currentPoint1 = nextPoint1;
              if (arrayPosition1 == squarePoints.length-2 && point1 >= squarePoints.length-2){
                point1 = 0;
              }
              else if (point1 >= squarePoints.length-2){
                // nextPoint1 = [squarePoints[2], squarePoints[3]];
                point1 = -2;
              }
              point1 += 2;
              nextPoint1 = [squarePoints[point1], squarePoints[point1+1]];
              // if (currentPoint1[0] == startingPoint1[0] && currentPoint1[1] == startingPoint1[1]){
              //   this.scene.start("pauseScreen");
              // }
              // textScoreLeft.setText([startingPoint1, currentPoint1, nextPoint1, point1]);
            }
          }
          if (direction1 == -1){
            if (began1 != true){
              point1 = arrayPosition1-2;
              began1 = true;
            }
            if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, nextPoint1[0], nextPoint1[1]) <= 15){
              currentPoint1 = nextPoint1;
              if (arrayPosition1 == 0 && point1 == -2){
                point1 = squarePoints.length-2;
              }
              else if (point1 <= 0){
                // nextPoint1 = [squarePoints[2], squarePoints[3]];
                point1 = squarePoints.length;
              }
              point1 -= 2;
              nextPoint1 = [squarePoints[point1], squarePoints[point1+1]];
              // if (currentPoint1[0] == startingPoint1[0] && currentPoint1[1] == startingPoint1[1]){
              //   this.scene.start("pauseScreen");
              // }
              // textScoreLeft.setText([startingPoint1, currentPoint1, nextPoint1, point1]);
            }
          }
        }
      }, this);

      //Finds the point that the player is starting nearest on the shape
      this.input.on('pointerdown', function (pointer2){
        var x = pointer2.x;
        var y = pointer2.y;
        var points = this.findStartingPoint(x, y, trianglePoints, distHolder2);
        startingPoint2 = points[0];
        arrayPosition2 = points[1];
        textScoreRight.setText([arrayPosition2])
      }, this);

      //Allows user to draw when pressing finger down
      this.input.on('pointermove', function (pointer2) {

        //This can be used as an anti-cheating method
        // this.input.on('pointerup', function (pointer1){
        //   this.scene.start("pauseScreen");
        // }, this);

        if (pointer2.isDown){
          // userStrokeLineRight = this.add.image(pointer2.x, pointer2.y, 'brush', Phaser.Math.Between(0,5));

          if (checkedDirection2 != true){
            if (arrayPosition2 == trianglePoints.length-2){
              if (Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[0], trianglePoints[1]) < Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[arrayPosition2-2], trianglePoints[arrayPosition2-1])){
                direction2 = 1;
                nextPoint2 = [trianglePoints[0], trianglePoints[1]];
              }
              if (Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[0], trianglePoints[1]) > Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[arrayPosition2-2], trianglePoints[arrayPosition2-1])){
                direction2 = -1;
                nextPoint2 = [trianglePoints[arrayPosition2-2], trianglePoints[arrayPosition2-1]];
              }
            }
            if (arrayPosition2 == 0){
              if (Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[arrayPosition2+2], trianglePoints[arrayPosition2+3]) < Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[trianglePoints.length-2], trianglePoints[trianglePoints.length-1])){
                direction2 = 1;
                nextPoint2 = [trianglePoints[2], trianglePoints[3]];
              }
              if (Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[arrayPosition2+2], trianglePoints[arrayPosition2+3]) > Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[trianglePoints.length-2], trianglePoints[trianglePoints.length-1])){
                direction2 = -1;
                nextPoint2 = [trianglePoints[trianglePoints.length-2], trianglePoints[trianglePoints.length-1]];
              }
            }
            else{
              if (Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[arrayPosition2+2], trianglePoints[arrayPosition2+3]) < Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[arrayPosition2-2], trianglePoints[arrayPosition2-1])){
                direction2 = 1;
                nextPoint2 = [trianglePoints[arrayPosition2+2], trianglePoints[arrayPosition2+3]];
              }
              else if (Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[arrayPosition2+2], trianglePoints[arrayPosition2+3]) > Phaser.Math.Distance.Between(pointer2.x, pointer2.y, trianglePoints[arrayPosition2-2], trianglePoints[arrayPosition2-1])){
                direction2 = -1;
                nextPoint2 = [trianglePoints[arrayPosition2-2], trianglePoints[arrayPosition2-1]];
              }
            }
            textScoreRight.setText([direction2]);
            checkedDirectionCounter2++;
            //Makes sure the direction stays set once the user has committed to one
            if (checkedDirectionCounter2 == 10){
              checkedDirection2 = true;
            }
          }
          // userStrokeLineRight = this.add.image(pointer2.x, pointer2.y, 'brush', Phaser.Math.Between(0,5));
          this.add.image(pointer2.x, pointer2.y, 'brush');

          if (direction2 == 1){
            if (began2 != true){
              point2 = arrayPosition2+2;
              began2 = true;
            }
            if (Phaser.Math.Distance.Between(pointer2.x, pointer2.y, nextPoint2[0], nextPoint2[1]) <= 15){
              currentPoint2 = nextPoint2;
              if (arrayPosition2 == trianglePoints.length-2 && point2 >= trianglePoints.length-2){
                point2 = 0;
              }
              else if (point2 >= trianglePoints.length-2){
                // nextPoint1 = [squarePoints[2], squarePoints[3]];
                point2 = -2;
              }
              point2 += 2;
              nextPoint2 = [trianglePoints[point2], trianglePoints[point2+1]];
              // if (currentPoint1[0] == startingPoint1[0] && currentPoint1[1] == startingPoint1[1]){
              //   this.scene.start("pauseScreen");
              // }
              // textScoreRight.setText([startingPoint2, currentPoint2, nextPoint2, point2]);
            }
          }
          if (direction2 == -1){
            if (began2 != true){
              point2 = arrayPosition2-2;
              began2 = true;
            }
            if (Phaser.Math.Distance.Between(pointer2.x, pointer2.y, nextPoint2[0], nextPoint2[1]) <= 15){
              currentPoint2 = nextPoint2;
              if (arrayPosition2 == 0 && point2 == -2){
                point2 = trianglePoints.length-2;
              }
              else if (point2 <= 0){
                // nextPoint1 = [squarePoints[2], squarePoints[3]];
                point2 = trianglePoints.length;
              }
              point2 -= 2;
              nextPoint2 = [trianglePoints[point2], trianglePoints[point2+1]];
              // if (currentPoint1[0] == startingPoint1[0] && currentPoint1[1] == startingPoint1[1]){
              //   this.scene.start("pauseScreen");
              // }
              //[390, 350, 465, 250, 540, 350];
              // textScoreRight.setText([startingPoint2, currentPoint2, nextPoint2, point2]);
            }
          }
        }
      }, this);
    }

    findStartingPoint(x, y, arr, distHold){
      var startingPoint;
      var arrayPosition;
      var returnArr;
      for (var i = 0; i < arr.length; i+=2){
        dist = Phaser.Math.Distance.Between(x, y, arr[i], arr[i+1])
        if (dist < distHold){
          startingPoint = [arr[i], arr[i+1]];
          arrayPosition = i;
          distHold = dist;
        }
      }
      returnArr = [startingPoint, arrayPosition];
      return returnArr;
    }

  update(){
    //is a loop that runs constantly
    this.input.on('pointerup', function (pointer1) {touchCounter--;}, this);

    textScoreLeft.setText([startingPoint1, currentPoint1, nextPoint1, point1]);
    textScoreRight.setText([startingPoint2, currentPoint2, nextPoint2, point2]);
    //
    // if (touchCounter < 2){
    //   // this.scene.pause();
    //   // this.scene.stop();
    //   // this.scene.launch("pauseScreen");
    //   this.scene.start("pauseScreen");
    //   // textScoreLeft.setText("hi");
    // }




  }

}
