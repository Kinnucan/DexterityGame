class dextgameWinScreen extends Phaser.Scene{
  constructor(){
    super({key:"winScreen"});
  }

  preload(){

  }

  create(){
    var endText = this.add.text(window.innerWidth/5, 200, 'Congrats! You beat all the shapes! \nWould you like to play again and try to beat your score?', {align:'center'});
    endText.setColor('aqua');
    var displayScore = this.add.text(300, 240, 'Current Score: ' + Math.floor(score));
    var displayAvgScore = this.add.text(300, 260, 'Average Score: ' + Math.floor(cumulativeScore/userLevel))
    userLevel = 0;
    continueButton = this.add.text(400,450, "Click me to Play Again!", {fill: '#0f0'}).setInteractive()
    .on('pointerdown', ()=>this.actionOnClick())
    .on('pointerup', ()=>this.actionOnRelease());
  }

  actionOnClick(){
    continueButton.setStyle({ color: '#ff0'});
  }

  actionOnRelease(){
    this.scene.start("restart");
  }


  update(){
    checkOriention(window.innerWidth, window.innerHeight);

  }

}
