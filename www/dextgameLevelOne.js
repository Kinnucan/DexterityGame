class dextgameLevelOne extends Phaser.Scene{
  constructor(){
    super({key:"levelOne"});
  }

  preload(){
    //USed for load music and pictures
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

    graphics.lineStyle(5, 0x0000FF, 1.0);
    graphics.strokeRect(105, 250, 100, 100);
    graphics.strokeTriangle(390, 350, 465, 250, 540, 350);

    var squarePoints = [105, 250, 205, 250, 205, 350, 105, 350];
    var trianglePoints = [407.5, 350, 465, 250, 522.5, 350];

    // text.setText([Phaser.Math.Distance.Between(trianglePoints[0], trianglePoints[1], trianglePoints[2], trianglePoints[3]),
    //               Phaser.Math.Distance.Between(trianglePoints[4], trianglePoints[5], trianglePoints[2], trianglePoints[3]),
    //               Phaser.Math.Distance.Between(trianglePoints[0], trianglePoints[1], trianglePoints[4], trianglePoints[5])]);

    var checkedDirectionCounter1 = 0;
    var checkedDirectionCounter2 = 0;
    var indexOfNextPoint1;
    var indexOfNextPoint2;

    timeText = this.add.text(40, 40);

    //Finds the point that the player is starting nearest on the shape
    this.input.on('pointerdown', function (pointer1){
      var x = pointer1.x;
      var y = pointer1.y;
      [startingPoint1, indexOfNextPoint1] = this.findStartingPoint(x, y, squarePoints, distanceThreshold1);
    }, this);

    //Allows user to draw when pressing finger down
    this.input.on('pointermove', function (pointer1) {

      //This can be used as an anti-cheating method
      // this.input.on('pointerup', function (pointer1){
      //   this.scene.start("pauseScreen");
      // }, this);
      if (pointer1.isDown){
        if (!checkedDirection1){
          var x = pointer1.x;
          var y = pointer1.y;
          [direction1, nextPoint1] = this.findDirectionAndNextPoint(x, y, indexOfNextPoint1, squarePoints);
          text.setText([direction1, nextPoint1]);
          checkedDirectionCounter1++;
          if (checkedDirectionCounter1 == 30)
            checkedDirection1 = true;
        }

        this.add.image(pointer1.x, pointer1.y, 'brush');

        var x = pointer1.x;
        var y = pointer1.y;
        [currentPoint1, nextPoint1, indexOfNextPoint1] = this.traceUserTouch(direction1, checkedDirection1, x, y, nextPoint1, currentPoint1, indexOfNextPoint1, squarePoints);
      }
    }, this);


    //Finds the point that the player is starting nearest on the shape
    this.input.on('pointerdown', function (pointer2){
      var x = pointer2.x;
      var y = pointer2.y;
      [startingPoint2, indexOfNextPoint2] = this.findStartingPoint(x, y, trianglePoints, distanceThreshold2);
    }, this);

    //Allows user to draw when pressing finger down
    this.input.on('pointermove', function (pointer2) {

      //This can be used as an anti-cheating method
      // this.input.on('pointerup', function (pointer1){
      //   this.scene.start("pauseScreen");
      // }, this);
      if (pointer2.isDown){
        //Timer code
        timeText.setText('Time: ' + timer + '\nDelta: ');

        if (!checkedDirection2){
          var x = pointer2.x;
          var y = pointer2.y;
          [direction2, nextPoint2] = this.findDirectionAndNextPoint(x, y, indexOfNextPoint2, trianglePoints);
          text2.setText([direction2, nextPoint2]);
          checkedDirectionCounter2++;
          if (checkedDirectionCounter2 == 30)
            checkedDirection2 = true;
        }

        this.add.image(pointer2.x, pointer2.y, 'brush');

        var x = pointer2.x;
        var y = pointer2.y;
        [currentPoint2, nextPoint2, indexOfNextPoint2] = this.traceUserTouch(direction2, checkedDirection2, x, y, nextPoint2, currentPoint2, indexOfNextPoint2, trianglePoints);
      }
    }, this);
  }

  findStartingPoint(x, y, array, distanceThreshold){
    var startingPoint;
    var startingPointIndex;
    for (var i = 0; i < array.length; i+=2){
      dist = Phaser.Math.Distance.Between(x, y, array[i], array[i+1])
      if (dist < distanceThreshold){
        startingPoint = [array[i], array[i+1]];
        startingPointIndex = i;
        distanceThreshold = dist;
      }
      //Setting Timer after pointer is down
      // timeText = this.add.text(40,60, '',{fontSize:'20px', fill:'#ffffff'});
      // var time = Math.floor(this.time.totalElapsedSeconds());
      // var min = Math.floor(time/60);
      // if (min<10){
      //   min = '0' +min;
      // }
      // if (sec < 10){
      //   sec = '0'+sec;
      // }
      // timeText.text = 'Time' +min+':'+sec;
    }
    return [startingPoint, startingPointIndex];
  }

  findIndexOfPoint(index, arrayLength){
    return ((index % arrayLength) + arrayLength) % arrayLength;
  }

  findDirectionAndNextPoint(x, y, arrayPosition, array){
    var nextIndex = this.findIndexOfPoint(arrayPosition+2, array.length);
    var prevIndex = this.findIndexOfPoint(arrayPosition-2, array.length);
    var direction;
    var nextPoint;
    if (Phaser.Math.Distance.Between(x, y, array[nextIndex], array[nextIndex+1]) <
          Phaser.Math.Distance.Between(x, y, array[prevIndex], array[prevIndex+1])){
        direction = 1;
        nextPoint = [array[nextIndex], array[nextIndex+1]];
    }
    else if (Phaser.Math.Distance.Between(x, y, array[prevIndex], array[prevIndex+1]) <
               Phaser.Math.Distance.Between(x, y, array[nextIndex], array[nextIndex+1])){
        direction = -1;
        nextPoint = [array[prevIndex], array[prevIndex+1]];
    }
    return [direction, nextPoint];
  }

  traceUserTouch(direction, checkedDirection, x, y, nextPoint, currentPoint, indexOfNextPoint, array){
    if (direction && checkedDirection){
      if (Phaser.Math.Distance.Between(x, y, nextPoint[0], nextPoint[1]) <= 15){
        currentPoint = nextPoint;
        indexOfNextPoint = this.findIndexOfPoint(indexOfNextPoint + (2 * direction), array.length);
        nextPoint = [array[indexOfNextPoint], array[indexOfNextPoint+1]];
        text2.setText([startingPoint2, currentPoint, nextPoint, indexOfNextPoint]);
      }
    }
    return [currentPoint, nextPoint, indexOfNextPoint];
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
