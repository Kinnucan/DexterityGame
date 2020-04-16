var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [dextgameWelcomeScreen, dextgamePauseScreen, dextgameLevelOne]
};

var text;
var graphics;
var timeoutID;
var touchCounter;
var winCondition;
var checkPoints;

var game = new Phaser.Game(config);
