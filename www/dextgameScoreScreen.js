class dextgameScoreScreen extends Phaser.Scene{
  constructor(){
    super({key:"scoreScreen"});
  }

  preload(){

  }

  create(){
    if (sceneChangeCondition == 0){
      var congratsText = this.add.text(323, 200, 'Nice going!');
    }else if (sceneChangeCondition==1) {
      var looseText = this.add.text(323, 200, 'YOU LOSE!');
    }

    var scoreText = this.add.text(300, 240, 'Current Score: ' + score);
    var instructions = this.add.text(80, 280, 'When ready, press the button below to move on to the next level!');


  }

  update(){


  }

}
