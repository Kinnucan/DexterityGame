class dextgameWelcomeScreen extends Phaser.Scene{
  constructor(){
    super({key:"welcomeScreen"});
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
    text = this.add.text(20,20, 'Welcome! Place Two Fingers Down To Begin');
    this.scene.start("playScreen");
  }

  update(){
    //is a loop that runs constantly-->Needs to Fix?
    // if (this.input.pointer1.isDown || this.input.pointer2.isDown){
    //   graphics.clear();
    //   this.scene.start("playScreen");
    // }

    // text.setText([
    //         'pointer1.isDown: ' + this.input.pointer1.isDown,
    //         'pointer2.isDown: ' + this.input.pointer2.isDown,
    //
    //     ]);
    //
    //     graphics.fillStyle(0xff0000, 1);
    //     graphics.fillRect(this.input.pointer1.x, this.input.pointer1.y, 64, 64);
    //
    //     graphics.fillStyle(0x00ff00, 1);
    //     graphics.fillRect(this.input.pointer2.x, this.input.pointer2.y, 64, 64);




  }
}
