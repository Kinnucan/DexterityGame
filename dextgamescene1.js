class dextgamescene1 extends Phaser.Scene{
  constructor(){
    super({key:"dextgamescene1"});
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
    this.input.addPointer(1);
    text = this.add.text(10,10, 'Hello');
    // this.createScreenTouch();
  }

  update(){
    //is a loop that runs constantly
    if (this.input.pointer1.isDown || this.input.pointer2.isDown){
      graphics.clear();
      // text = this.add.text(10,10,"Loading Game...");

      // text = this.add.text(20,20, "Hi", {font: '16px Courier', fill: '#00ff00'});
    }
    text.setText([
            'pointer1.isDown: ' + this.input.pointer1.isDown,
            'pointer2.isDown: ' + this.input.pointer2.isDown,
            // 'pointer3.isDown: ' + this.input.pointer3.isDown,
            // 'pointer4.isDown: ' + this.input.pointer4.isDown
        ]);

        graphics.fillStyle(0xff0000, 1);
        graphics.fillRect(this.input.pointer1.x, this.input.pointer1.y, 64, 64);

        graphics.fillStyle(0x00ff00, 1);
        graphics.fillRect(this.input.pointer2.x, this.input.pointer2.y, 64, 64);

        // graphics.fillStyle(0x0000ff, 1);
        // graphics.fillRect(this.input.pointer3.x, this.input.pointer3.y, 64, 64);
        //
        // graphics.fillStyle(0xff00ff, 1);
        // graphics.fillRect(this.input.pointer4.x, this.input.pointer4.y, 64, 64);

  }

  // function createScreenTouch(){
  //   this.input.addPointer(1);
  //   //
  //   // var x = 100;
  //   // var y = 0;
  //   // var pointer = input.activePointer;
  //   // if (pointer.isDown){
  //   //   var touchX = pointer.x;
  //   //   var touchY = pointer.y;
  //   // }
  //
  //
  //
  //   // var hitArea = new Phaser.Geom.Rectangle()
  // }



}
