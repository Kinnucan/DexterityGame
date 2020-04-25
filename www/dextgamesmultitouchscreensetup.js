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
var dist;

var startingPoint1;
var nextPoint1;
var currentPoint1;
var direction1;
var arrayPosition1;
var distanceThreshold1 = 100;
var checkedDirection1;
var began1;
var point1;

var startingPoint2;
var nextPoint2;
var currentPoint2;
var direction2;
var arrayPosition2;
var distanceThreshold2 = 100;
var checkedDirection2;
var began2;
var point2;

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
