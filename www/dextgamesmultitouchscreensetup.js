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
  scene: [dextgameWelcomeScreen, dextgameRulesScreen, dextgamePauseScreen, dextgameGameScreen, dextgameScoreScreen, dextgameLoseScreen, dextgameWinScreen, dextgameRestart]
};

var text;
var timeTextLeft;
var timeTextRight;
var accumulatedLeftTime = 0;
var accumulatedRightTime = 0;

var score;
var cumulativeScore=0;
var total;
var avg;
var perc;
var diff;

var graphics;
var timeoutID;
var touchCounter;

var leftShape;
var rightShape;
var completedShapes = 0;

var userLevel=1;
var sceneChangeCondition;
var winCondition = false;

var continueButton;
var rulesButton;
var scoreText;

var orientationText;
var ship;
var spacefield;

var game = new Phaser.Game(config);

function checkOriention (width, height){
  if (window.innerWidth < window.innerHeight){
    // ship.setVisible(true);
    // orientationText.setVisible(true);
    // text.setVisible(false);
    document.getElementById("turn").style.display="block";
  }else if (window.innerWidth > window.innerHeight){
    // ship.setVisible(false);
    // orientationText.setVisible(false);
    // text.setVisible(true);
    document.getElementById("turn").style.display="none";
  }
}
