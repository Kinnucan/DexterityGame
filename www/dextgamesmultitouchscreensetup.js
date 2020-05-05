var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.DOM.FIT,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    width: 800,
    height: 600
  },
  backgroundColor: 0x000000,
  scene: [dextgameWelcomeScreen, dextgameRulesScreen, dextgamePauseScreen, dextgameGameScreen, dextgameScoreScreen, dextgameLoseScreen, dextgameWinScreen]
};

var text;
var text2;
var timeText1;
var timeText2;
var timer1;
var timer2;

var score;
var avgScore;
var total;
var avg;
var perc;
var diff;

var graphics;
var timeoutID;
var touchCounter;

var leftShape;
var rightShape;

var userLevel=1;
var sceneChangeCondition;
var winCondition = false;

var continueButton;
var rulesButton;
var scoreText;
var cumulativeScore=0;

var orientationText;
var ship;

var game = new Phaser.Game(config);
