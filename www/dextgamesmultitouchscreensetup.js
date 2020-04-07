var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [dextgameWelcomeScreen, dextgamePlayScreen, dextgamePauseScreen]
};

var text;
var graphics;
var timeoutID;
var touchCounter;

var game = new Phaser.Game(config);

// pointer1 = scene.input.activePointer;
// pointer2 = scene.input.activePointer;
