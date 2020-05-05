class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
  }

  preload(){
    //Used for load music and pictures
    // this.scene.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // this.scene.scale.forceOrientation(false, true);
    this.load.image('pic', "img/playportrait.png");


  }

  create(){

    // ship = this.add.image(0, 0, 'pic').setOrigin(0);
    // orientationText = this.add.text(25, 128, 'Please set your\nphone to landscape', {fill: '#00ff00'}).setOrigin(0);

    // orientationText = this.add.text(320, 128, 'Please set your\nphone to landscape', { font: '48px Courier', fill: '#00ff00', align: 'center' }).setOrigin(0.5);
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





    touchCounter = 0;
    //create objects
    // const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    // const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    this.input.addPointer(1);
    text = this.add.text(20,20, 'Welcome! Place Two Fingers Down To Begin');
    text.setColor('aqua');
    text.setText(window.scene.orientation.type);
    // text.setOrigin(5);
    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);


  }

  checkOriention (orientation){
    if (orientation === Phaser.Scale.PORTRAIT){
      ship.setVisible(true);
      orientationText.setVisible(true);
      text.setVisible(false);
      // document.getElementById("turn").style.display="block";
    }else if (orientation === Phaser.Scale.LANDSCAPE){
      ship.setVisible(false);
      orientationText.setVisible(false);
      text.setVisible(true);
      // document.getElementById("turn").style.display="none";
    }
  }

  update(){
    //is a loop that runs constantly
    // this.checkOriention(window.screen.orientation.type);
    // this.scale.on('orientationchange', function (){
    //   this.checkOriention(window.screen.orientation.type)
    // }, this);
    if (touchCounter == 2){
      this.scene.start("rulesScreen");
    }
  }

}
