class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
  }

  preload(){
    //Used for load music and pictures
    //loads the background image for the welcome screen
    //sets the touchCounter to 0
    this.load.image('welcomeBackground', 'assets/particles/320633713.png');
    touchCounter = 0;
  }

  create(){
    //Creates objects
    //since phaser automatically sets up one pointer to be active, we use the
    //following lines to add a second pointer.
    this.input.addPointer(1);
    //adds welcome message and instructions on what to do to the screen
    text = this.add.text(335,300, 'Welcome', { fontSize: '30px', fontFamily: 'Arial', fill: '#FFC0CB' } );
    text = this.add.text(250,400,'Place Two Fingers Down To Begin', { fontSize: '20px', fontFamily: 'Arial',fill: '#000' } );
    //sets the color of the text
    text.setColor('aqua');
    //adds background image to the screen, then sets its scale and depth
    this.add.image(400, 400, 'welcomeBackground').setScale(0.5).setDepth(-20);
    //creates a fucntion for when a pointer is down
    //each time the user places a finger on the screen, the touhCounter increases
    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);

  }


  update(){
    //is a loop that runs constantly
    //checks to make sure the user is in Landscape View
    checkOriention(window.innerWidth, window.innerHeight);
    //when the user places two fingers on the screen, this scene calls the rules
    //screen.
    if (touchCounter == 2){
      this.scene.start("rulesScreen");
    }
  }

}
