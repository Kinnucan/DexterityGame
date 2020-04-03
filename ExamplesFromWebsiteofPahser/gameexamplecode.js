var config = {
  type:Phaser.AUTO,
  width:800,
  height:800,
  physics:{
    default:'arcade',
    arcade:{
      gravity: {y: 200}
    }
  },
  scene:[example1]
};

var game = new Phaser.Game(config);
