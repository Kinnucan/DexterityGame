class dextgameWinScreen extends Phaser.Scene{
  constructor(){
    super({key:"winScreen"});
  }

  preload(){

  }

  create(){
    //creates and adds congradulations texts to the screen. then sets the text's
    //color attribute.
    var endText = this.add.text(150, 200, 'Congrats! You beat all the shapes! \nWould you like to play again and try to beat your score?', {align:'center'});
    endText.setColor('aqua');
    //adds and displays the users score, and average score to the screen.
    var displayScore = this.add.text(300, 240, 'Current Score: ' + Math.floor(score));
    var displayAvgScore = this.add.text(300, 260, 'Average Score: ' + Math.floor(cumulativeScore/userLevel))
    //resets the users current game level to 0
    userLevel = 0;
    //creates and adds a Play again button to the screen, when clicked the
    //button changes colors, when released the button calls either the restart
    //file
    continueButton = this.add.text(400,450, "Click me to Play Again!", {fill: '#0f0'}).setInteractive()
    .on('pointerdown', ()=>this.actionOnClick())
    .on('pointerup', ()=>this.actionOnRelease()).setFontSize(25);
  }

  //function that changes the color of the continue button
  actionOnClick(){
    continueButton.setStyle({ color: '#ff0'});
  }

  //when realeased, the button calls the restart file that will set all the
  //game's attribtues allowing the user to play again.
  actionOnRelease(){
    this.scene.start("restart");
  }


  update(){
    //checks to make sure the user is in Landscape View
    checkOriention(window.innerWidth, window.innerHeight);
  }

}
