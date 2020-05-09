class dextgameRulesScreen extends Phaser.Scene{
  constructor(){
    super({key:"rulesScreen"});
  }

  preload(){
    //loads the touchCounter, counts how many fingers on the screen, to 0,
    //loads the background image
    touchCounter = 0;
    this.load.image('ruleback', 'assets/particles/gameback.jpg');
  }

  create(){
    //creates and adds title text to the screen
    //then sets the texts different attributes.
    var welcomeMessage = this.add.text(350,100, 'RULES');
    welcomeMessage.setColor('aqua');
    welcomeMessage.setFontFamily('Cursive');
    welcomeMessage.setFontSize('30px');

    //then creates and adds the text for the rules of the game to the screen.
    //then sets the texts style.
    //then the add images to the screen and sets its depth so that it is behind
    //the text.

    var rule1 = this.add.text(135,160);
    rule1.setText(['Rule #1: As soon as both fingers touch the screen,', 'both must stay down until the shapes are completed!']);
    var rule2 = this.add.text(135,210);
    rule2.setText(['Rule #2: If one finger leaves the screen before both shapes', 'are completed, you lose the game and must start over!']);
    var rule3 = this.add.text(135,260);
    rule3.setText(['Rule #3: Both fingers must be moving at all times.', 'If one finger is idle for too long, you lose the game!']);
    var rule4 = this.add.text(135,310);
    rule4.setText(['Rule #4: Once both fingers are down, they both must remain', 'on the screen. If you take one off, you lose the game!']);
    var rule5 = this.add.text(135,360);
    rule5.setText(['Rule #5: Once you pick a direciton to trace a shape, you', 'must keep tracing in that direction. No take-backsies!']);
    var endMessage = this.add.text(180,435);
    endMessage.setText(['If you feel like you understand the rules,', 'place two fingers down to move on to Level One!']);
    endMessage.setColor('aqua');
    endMessage.setAlign('center')
    this.add.image(400, 400, 'ruleback').setScale(0.5).setDepth(-20);

    //creates a fucntion for when a pointer is down
    //each time the user places a finger on the screen, the touhCounter increases
    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);
  }

  update(){
    //checks to make sure the user is in Landscape View
    checkOriention(window.innerWidth, window.innerHeight);

    //when the user places two fingers on the screen, the game starts the game.
    if (touchCounter == 2){
      this.scene.start("gameScreen");
    }
  }

}
