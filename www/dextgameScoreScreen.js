class dextgameScoreScreen extends Phaser.Scene{
  constructor(){
    super({key:"scoreScreen"});
  }

  preload(){

  }

  create(){
    var congratsText = this.add.text(323, 200, 'Nice going!');
    var scoreText = this.add.text(300, 240, 'Current Score: ' + userScore);
    var instructions = this.add.text(80, 280, 'When ready, press the button below to move on to the next level!');
  }

  update(){
    
  }

}
