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
      var displayScore = this.add.text(300, 240, 'Current Score: ' + Math.floor(score));
      var displayAvgScore = this.add.text(300, 260, 'Average Score: ' + Math.floor(cumulativeScore/userLevel))
      var instructions = this.add.text(80, 280, 'When ready, press the button below to move on to the next level!');

      continueButton = this.add.text(450,450, "Continue", {fill: '#0f0'}).setInteractive()
      .on('pointerdown', ()=>this.actionOnClick())
      .on('pointerup', ()=>this.actionOnRelease());
      userLevel += 1;


      rulesButton = this.add.text(350,450, "Rules", {fill: '#0f0'}).setInteractive()
      .on('pointerdown', ()=>this.actionOnClick())
      .on('pointerup', ()=>this.actionOnReleaseRules());



    }
    else if (sceneChangeCondition==1) {
      var loseText = this.add.text(323, 200, 'YOU LOSE! Would you like to try again?');
      var displayScore = this.add.text(300, 220, 'Current Score: ' + Math.floor(score));
      var displayAvgScore = this.add.text(300, 240, 'Average Score: ' + Math.floor(score/userLevel))
      continueButton = this.add.text(450,450, "Try Again", {fill: '#0f0'}).setInteractive()
      .on('pointerdown', ()=>this.actionOnClick())
      .on('pointerup', ()=>this.actionOnRelease());

      rulesButton = this.add.text(350,450, "Rules", {fill: '#0f0'}).setInteractive()
      .on('pointerdown', ()=>this.actionOnClick())
      .on('pointerup', ()=>this.actionOnReleaseRules());
    }
    else if (sceneChangeCondition == 2){
      this.scene.start('winScreen');
    }

  }

  actionOnClick(){
    continueButton.setStyle({ color: '#ff0'});
  }

  actionOnRelease(){
    this.scene.start("gameScreen");
  }

  actionOnReleaseRules(){
    this.scene.start("rulesScreen");
  }

  update(){

  }

}
