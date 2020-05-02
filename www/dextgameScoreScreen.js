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

    var displayScoreText = this.add.text(300, 240, 'Current Score: ' + Math.floor(score));
    var instructions = this.add.text(80, 280, 'When ready, press the button below to move on to the next level!');

    continueButton = this.add.text(400,450, "Click me to Continue", {fill: '#0f0'}).setInteractive()
    .on('pointerdown', ()=>this.actionOnClick())
    .on('pointerup', ()=>this.actionOnRelease());

  }

  actionOnClick(){
    continueButton.setStyle({ color: '#ff0'});
  }

  actionOnRelease(){
    this.scene.start('levelOne');
  }

  update(){


  }

}
