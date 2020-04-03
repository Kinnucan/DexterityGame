class example1 extends Phaser.Scene {
  constructor(){
    super({key:"example1"});
  }
  preload(){
    this.load.image('funnystuff','assetsExample/IMG_2773.jpeg');

  }


  create(){
    this.image = this.add.image(400,300,'funnystuff');

    this.input.keyboard.on('keyup_D', function(event){
      this.image.x += 10;
    }, this);
  }
}
