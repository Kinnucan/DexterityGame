var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [dextgameWelcomeScreen, dextgamePauseScreen, dextgameLevelOne]
  // input: {activePointer: 2}
};

var text;
var text2;
var timeText;
var timer;

var textScoreLeft;
var textScoreRight;
var userStrokeLineLeft;
var userStrokeLineRight;
var graphics;
var timeoutID;
var touchCounter;

var game = new Phaser.Game(config);

function resize() {
        var canvas = game.canvas, width = window.innerWidth, height = window.innerHeight;
        var wratio = width / height, ratio = canvas.width / canvas.height;

        if (wratio < ratio) {
            canvas.style.width = width + "px";
            canvas.style.height = (width / ratio) + "px";
        } else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }
