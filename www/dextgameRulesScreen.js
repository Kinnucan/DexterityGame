class dextgameRulesScreen extends Phaser.Scene{
  constructor(){
    super({key:"rulesScreen"});
  }

  preload(){

  }

  create(){
    // this.scale.on('resize', resize, this);

    // const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    // const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    touchCounter = 0;
    var welcomeMessage = this.add.text(135,130, 'Here are the rules to play the game. Read carefully!');
    var rule1 = this.add.text(135,190);
    rule1.setText(['Rule #1: As soon as both fingers touch the screen,', 'both must stay down until the shapes are completed!']);
    var rule2 = this.add.text(135,240, 'Rule #2: If one finger leaves the screen before both shapes are completed, you lose the game and must start over!');
    rule2.setText(['Rule #2: If one finger leaves the screen before both shapes', 'are completed, you lose the game and must start over!']);
    var rule3 = this.add.text(135,290, 'Rule #3: Both fingers must be moving at all times. If one finger is idle for too long, you lose the game!');
    rule3.setText(['Rule #3: Both fingers must be moving at all times.', 'If one finger is idle for too long, you lose the game!']);
    var endMessage = this.add.text(135,370, 'If you feel like you understand the rules, place two fingers down to move on to Level One!');
    endMessage.setText(['If you feel like you understand the rules,', 'place two fingers down to move on to Level One!']);

    this.input.on('pointerdown', function (pointer) {touchCounter++;}, this);
  }

  update(){
    if (touchCounter == 2){
      this.scene.start("game");
    }
  }

}
