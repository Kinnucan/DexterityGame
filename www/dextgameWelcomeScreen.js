class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
  }

  preload(){
    //Used for load music and pictures
    this.load.image('pic', "img/playportrait.png");


  }

  create(){
    //Creates objects
    ship = this.add.image(0, 0, 'pic').setOrigin(0);
    orientationText = this.add.text(320, 128, 'Please set your\nphone to landscape', { font: '48px Courier', fill: '#00ff00', align: 'center' }).setOrigin(0.5);
    touchCounter = 0;
    this.input.addPointer(1);
    text = this.add.text(60,60, 'Welcome! Place Two Fingers Down To Begin', { fontSize: '25px', fill: '#000' } );
    text.setColor('aqua');
    this.load.image('flares', 'assets/320633713.png');
    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);


  }

  checkOriention (width, height){
    if (window.innerWidth < window.innerHeight){
      ship.setVisible(true);
      orientationText.setVisible(true);
      text.setVisible(false);
      // document.getElementById("turn").style.display="block";
    }else if (window.innerWidth > window.innerHeight){
      ship.setVisible(false);
      orientationText.setVisible(false);
      text.setVisible(true);
      // document.getElementById("turn").style.display="none";
    }
  }

  update(){
    //is a loop that runs constantly
    this.checkOriention(window.innerWidth, window.innerHeight);
    if (touchCounter == 2){
      this.scene.start("rulesScreen");
    }
  }

}





// orientationText = this.add.text(25, 128, 'Please set your\nphone to landscape', {fill: '#00ff00'}).setOrigin(0);

// orientationText.setText(window.screen.orientation.type);
// this.checkOriention(window.screen.orientation.type);
// this.scale.on('orientationchange', function (){
//   this.checkOriention(window.screen.orientation.type)
// }, this);


//
//
// if (window.screen.orientation === Phaser.Scale.PORTRAIT){
//   ship.alpha = 0.2;
//   orientationText.setVisible(true);
//     // document.getElementById("turn").style.display="block";
// }
// else if (window.screen.orientation === Phaser.Scale.LANDSCAPE){
//   ship.alpha = 1;
//   orientationText.setVisible(false);
//     // document.getElementById("turn").style.display="none";
// }






// this.scene.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
// this.scene.scale.forceOrientation(false, true);



// if(screen.isLandscape){
//   var checkText;
//   checkText = this.add.text(100,100, "hi");
//
// }

// window.addEventListener('orientationchange', function(orientation){
//   // alert(screen.orientation);
//   // if(this.scene.scale.isLandscape){
    // var checkText;
    // checkText = this.add.text(100,100, "hi");
//   //   // document.getElementById("turn").style.display="block";
//   // }
// });

// text.setText(window.scene.orientation.type);
// text.setOrigin(5);

// this.scene.scale.lockOrientation('landscape');

// var orientation = this.scene.scale.orientation;
// this.scale.lockOrientation('landscape');
// this.scale.on('resize', function(gameSize, baseSize, displaySize, resolution, previousWidth, previousHeight) {
//   this.scene.scale.resize(window.innerWidth, window.innerHeight);
// });
// this.gameScale.setMode('resize');
// this.scene.gameScale.setMode('resize')
// this.scale.on('resize', resize, this);
// this.scene.scale.resize(window.innerWidth, window.innerHeight);

// this.scale.on('orientationchange', function (){
//   this.checkOriention(window.screen.orientation.type)
// }, this);
//create objects
// const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
// const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
