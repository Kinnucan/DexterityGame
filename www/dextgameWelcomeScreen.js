class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
  }

  preload(){
    //Used for load music and pictures
    this.load.image('welcomeBackground', 'assets/particles/320633713.png');
    touchCounter = 0;
  }

  create(){
    //Creates objects
    this.input.addPointer(1);
    text = this.add.text(335,300, 'Welcome', { fontSize: '30px', fontFamily: 'Arial', fill: '#FFC0CB' } );
    text = this.add.text(250,400,'Place Two Fingers Down To Begin', { fontSize: '20px', fontFamily: 'Arial',fill: '#000' } );
    text.setColor('aqua');
    this.add.image(400, 400, 'welcomeBackground').setScale(0.5).setDepth(-20);
    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);

  }


  update(){
    //is a loop that runs constantly
    checkOriention(window.innerWidth, window.innerHeight);
    if (touchCounter == 2){
      this.scene.start("scoreScreen");
    }
  }

}
