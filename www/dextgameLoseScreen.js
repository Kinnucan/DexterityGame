class dextgameLoseScreen extends Phaser.Scene{
  constructor(){
    super({key:"loseScreen"});
  }

  preload(){

  }

  create(){
    //creates texts to display the loosing message and places it on the screen
    //then creates and places the try again button on the screen
    //when the button is clicked, the restart screen gets activiated
    var loseText = this.add.text(150, 200, 'Whoops, you took a finger off and lost the game! \nWould you like to try again?');
    continueButton = this.add.text(400,450, "Try Again", {fill: '#0f0'}).setInteractive()
    .on('pointerdown', ()=>this.actionOnClick())
    .on('pointerup', ()=>this.actionOnRelease()).setFontSize(25);
  }

  actionOnClick(){
    continueButton.setStyle({ color: '#ff0'});
  }

  actionOnRelease(){
    this.scene.start("restart");
  }


  update(){
    //checks to make sure the user is in Landscape View
    checkOriention(window.innerWidth, window.innerHeight);
  }

}
