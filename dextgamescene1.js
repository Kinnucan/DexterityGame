class dextgamescene1 extends Phaser.Scene{
  constructor(){
    super({key:"dextgamescene1"});
  }

  preload(){

  }

  init(){
    this.CONFIG = this.sys.game.CONFIG;

    this.generator = new Generator(this);

    //Controls
    this.is_holding =

  }

  create(){
    this.createScreenTouch();
  }

  function createScreenTouch(){
    this.input.addPointer(2);
    //
    // var x = 100;
    // var y = 0;
    // var pointer = input.activePointer;
    // if (pointer.isDown){
    //   var touchX = pointer.x;
    //   var touchY = pointer.y;
    }



    // var hitArea = new Phaser.Geom.Rectangle()
  }



}
