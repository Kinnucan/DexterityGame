class dextgameLevelOne extends Phaser.Scene{
  constructor(){
    super({key:"levelOne"});
  }

  preload(){
    //USed for load music and pictures
    this.load.image('brush', 'www/img/brush1.png');
    touchCounter = 2;
  }

  create(){
    //create objects
    graphics = this.add.graphics();
    this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome to Level One!');

    graphics.lineStyle(5, 0x0000FF, 1.0);
    graphics.strokeRect(105, 250, 100, 100);
    graphics.strokeTriangle(390, 350, 465, 250, 540, 350);

    // var squarePoints = [105, 250, 205, 250, 205, 350, 105, 350, 105, 250];
    // var i = 0;

    var checkPoints = [0, 0, 0, 0];
    winCondition = 0;

    //allows user to draw when pressing finger down
    this.input.on('pointermove', function (pointer1) {
      if (pointer1.isDown){
        this.add.image(pointer1.x, pointer1.y, 'brush1');
        //checks if the user is within a certain number of pixels of select points on the shape
        // var dist = Phaser.Math.Distance.Between(pointer1.x, pointer1.y, squarePoints[i], squarePoints[i+1]);
        // text.setText([
        //         'Distance: '
        //         'X: ' + pointer1.x,
        //         'Y: ' + pointer1.y
        //     ]);
        // if (dist <= 15 && i < 9){
        //   i += 2;
        // }
        if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, 105, 250) <= 15 && checkPoints[0] != 1){
          winCondition += 1;
          checkPoints[0] = 1;
        }
        if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, 205, 250) <= 15 && checkPoints[1] != 1){
          winCondition += 1;
          checkPoints[1] = 1;
        }
        if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, 205, 350) <= 15 && checkPoints[2] != 1){
          winCondition += 1;
          checkPoints[2] = 1;
        }
        if (Phaser.Math.Distance.Between(pointer1.x, pointer1.y, 105, 350) <= 15 && checkPoints[3] != 1){
          winCondition += 1;
          checkPoints[3] = 1;
        }
        text.setText(['Score: ' + winCondition]);
        if (winCondition == 4){
          text.setText([
                  'You won!'
              ]);
        }

      }
    }, this);
  }

  update(){
    //is a loop that runs constantly
    this.input.on('pointerup', function (pointer1) {touchCounter--;}, this);

    if (touchCounter < 2){
      this.scene.pause();
      this.scene.launch("pauseScreen");
    }
    

  }

}
