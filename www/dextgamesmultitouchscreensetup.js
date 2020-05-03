// import {squareLeft, triangleLeft, leftShapeList} from './www/dextGameShapeDataBaseLeft.js';
// import {squareRight, triangleRight, rightShapeList} from './www/dextGameShapeDataBaseRight.js';
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: '100%',
        height: '100%'
    },
  backgroundColor: 0x000000,
  scene: [dextgameWelcomeScreen, dextgameRulesScreen, dextgamePauseScreen, dextgameLevelOne, dextgameScoreScreen]
};

var text;
var text2;
var timeText1;
var timeText2;
var timer1;
var timer2;
var score;
var total;
var avg;
var perc;
var diff;

// var particles;

var graphics;
var timeoutID;
var touchCounter;

var leftShape;
var rightShape;

var userLevel=1;
var sceneChangeCondition;
var winCondition = false;

var continueButton;
var scoreText;

var game = new Phaser.Game(config);

//

function resize (gameSize, baseSize, displaySize, resolution)
{
    var width = gameSize.width;
    var height = gameSize.height;

    this.cameras.resize(width, height);

    // this.bg.setSize(width, height);
    // this.logo.setPosition(width / 2, height / 2);
}


// function resize() {
//         var canvas = game.canvas, width = window.innerWidth, height = window.innerHeight;
//         var wratio = width / height, ratio = canvas.width / canvas.height;
//
//         if (wratio < ratio) {
//             canvas.style.width = width + "px";
//             canvas.style.height = (width / ratio) + "px";
//         } else {
//             canvas.style.width = (height * ratio) + "px";
//             canvas.style.height = height + "px";
//         }
//     }




//     const squareRight = {
//       name: "square",
//       shapePoints: [505, 250, 626.25, 250, 626.25, 371.25, 505, 371.25],
//       draw: function(){
//         graphics.lineStyle(5, 0xFF000, 1.0);
//         graphics.strokeRect(505, 250, 121.25, 121.25);
//       }
//     };
//     const triangleRight = {
//       name: "triangle",
//       shapePoints: [400, 371.25, 470, 250, 540, 371.25],
//       draw: function() {
//         graphics.lineStyle(5, 0xFF000, 1.0);
//         graphics.strokeTriangle(400, 371.25, 470, 250, 540, 371.25);
//       }
//     };
//
// const rightShapeList = [squareRight, triangleRight];
//
//
//
// const squareLeft = {
//   name: "square",
//   shapePoints: [105, 250, 226.25, 250, 226.25, 371.25, 105, 371.25],
//   draw: function(){
//     graphics.lineStyle(5, 0x0000FF, 1.0);
//     graphics.strokeRect(105, 250, 121.25, 121.25);
//   }
// };
// const triangleLeft = {
//   name: "triangle",
//   shapePoints: [100, 371.25, 170, 250, 240, 371.25],
//   draw: function() {
//     graphics.lineStyle(5, 0x0000FF, 1.0);
//     graphics.strokeTriangle(100, 371.25, 170, 250, 240, 371.25);
//   }
// };
//
// const leftShapeList = [squareLeft, triangleLeft];











// graphics.lineStyle(5, 0x0000FF, 1.0);
// graphics.strokeRect(105, 250, 121.25, 121.25);
// graphics.strokeTriangle(400, 371.25, 470, 250, 540, 371.25);

// var squarePoints = [105, 250, 226.25, 250, 226.25, 371.25, 105, 371.25];
// var trianglePoints = [400, 371.25, 470, 250, 540, 371.25];
