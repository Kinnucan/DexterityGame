class dextgameLoseScreen extends Phaser.Scene{
  constructor(){
    super({key:"loseScreen"});
  }

  preload(){

  }

  create(){
    var loseText = this.add.text(323, 200, 'Sorry, you lost the game! Would you like to try again?');
  }

  update(){

  }

}
