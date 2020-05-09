// This sets up the whole game. creating a config variable and its different
// attributes.
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
  scene: [dextgameWelcomeScreen, dextgameRulesScreen, dextgameGameScreen, dextgameScoreScreen, dextgameLoseScreen, dextgameWinScreen, dextgameRestart]
};

//the following lines create global variables that are used throughout the whole
// game, with seperate scnes needing access to them

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

// creates the actual game using the configuration attribute from above
var game = new Phaser.Game(config);

//global function that checks and make sure the user is in Landscape View
//if the user goes into portrait mode, they change the games design on which
//whites out the screen, and places the image that instructs the user to go into
//landscape mode
function checkOriention (width, height){
  if (window.innerWidth < window.innerHeight){
    document.getElementById("turn").style.display="block";
  }else if (window.innerWidth > window.innerHeight){
    document.getElementById("turn").style.display="none";
  }
}
