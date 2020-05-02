class dextgameScoreScreen extends Phaser.Scene{
  constructor(){
    super({key:"scoreScreen"});
  }

  preload(){

  }

  create(){
    winCondition = false;
    if (sceneChangeCondition == 0){
      var congratsText = this.add.text(323, 200, 'Nice going!');
      userLevel += 1;
    }else if (sceneChangeCondition==1) {
      var looseText = this.add.text(323, 200, 'YOU LOSE!');
    }

    var scoreText = this.add.text(300, 240, 'Current Score: ' + score);
    var instructions = this.add.text(80, 280, 'When ready, press the button below to move on to the next level!');

    var continueButton = this.add.text(100,100, "Click me to Continue", {fill: '#0f0'}).setInteractive().on('pointerdown', ()=>this.actionOnClick());

  }

  actionOnClick(){
    this.scene.start("levelOne");

  }

  update(){


  }

}
