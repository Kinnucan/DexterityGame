class dextgameEndScreen extends Phaser.Scene{
  constructor(){
    super({key:"endScreen"});
  }

  preload(){

  }

  create(){
    var endText = this.add.text(323, 200, 'Congrats! You beat all the shapes! Would you like to play again and try to beat your score?');
  }

  update(){

  }

}
