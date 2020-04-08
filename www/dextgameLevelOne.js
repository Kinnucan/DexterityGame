class dextgameLevelOne extends Phaser.Scene{
  constructor(){
    super({key:"levelOne"});
  }

  // init() {
  //   //prepare data
  // }

  preload(){
    //USed for load music and pictures

  }

  create(){
    //create objects
    graphics = this.add.graphics();
    this.input.addPointer(2);
    text = this.add.text(20,20, 'Welcome to Level One!');

    graphics.lineStyle(5, 0x0000FF, 1.0);
    graphics.strokeRect(105, 250, 100, 100);
    graphics.strokeTriangle(390, 350, 465, 250, 540, 350);
  }

  update(){
    //is a loop that runs constantly
    // graphics.clear();
    // graphics.lineStyle(2, 0x0000FF, 1);
    // graphics.drawRect(50, 250, 100, 100);
  }
}
