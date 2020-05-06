class dextgameRulesScreen extends Phaser.Scene{
  constructor(){
    super({key:"rulesScreen"});
  }

  preload(){
    touchCounter = 0;
  }

  create(){
    var welcomeMessage = this.add.text(135,100, 'Here are the rules to play the game. Read carefully!');
    welcomeMessage.setColor('aqua');
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
    var endMessage = this.add.text(135,435);
    endMessage.setText(['If you feel like you understand the rules,', 'place two fingers down to move on to Level One!']);
    endMessage.setColor('aqua');

    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);
  }

  update(){
    checkOriention(window.innerWidth, window.innerHeight);
    
    if (touchCounter == 2){
      this.scene.start("gameScreen");
    }
  }

}
