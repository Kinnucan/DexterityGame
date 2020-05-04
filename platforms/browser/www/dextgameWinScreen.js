class dextgameWinScreen extends Phaser.Scene{
  constructor(){
    super({key:"winScreen"});
  }

  preload(){

  }

  create(){
    var endText = this.add.text(323, 200, 'Congrats! You beat all the shapes! Would you like to play again and try to beat your score?');
    var displayScore = this.add.text(300, 240, 'Current Score: ' + Math.floor(score));
    var displayAvgScore = this.add.text(300, 260, 'Average Score: ' + Math.floor(cumulativeScore/userLevel))
    continueButton = this.add.text(400,450, "Click me to Play Again!", {fill: '#0f0'}).setInteractive()
    .on('pointerdown', ()=>this.actionOnClick())
    .on('pointerup', ()=>this.actionOnRelease());
  }

  actionOnClick(){
    continueButton.setStyle({ color: '#ff0'});
  }

  actionOnRelease(){
    this.scene.start("welcomeScreen");
  }


  update(){

  }

}
