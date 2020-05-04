// import {squareLeft, triangleLeft, leftShapeList} from './www/dextGameShapeDataBaseLeft.js';
// import {squareRight, triangleRight, rightShapeList} from './www/dextGameShapeDataBaseRight.js';
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%'
    },
  plugins: {
    global: [{
      key: 'GameScalePlugin',
      plugin: Phaser.Plugins.GameScalePlugin,
      mapping: 'gameScale',
      data: {
        debounce: false,
        debounceDelay: 50,   // Debounce interval, in ms
        maxHeight: Infinity,
        maxWidth: Infinity,
        minHeight: 0,
        minWidth: 0,
        mode: 'fit',
        resizeCameras: true, // Resize each scene camera when resizing the game
        snap: null,          // Snap interval, in px}
      }
    }]
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
var rulesButton;
var scoreText;
var cumulativeScore=0;
var game = new Phaser.Game(config);

function resize() {
    const canvas = this.canvas;
    if (canvas) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const scale = Math.min(w / this.BaseWidth, h / this.BaseHeight);

        canvas.setAttribute("style",
            " -ms-transform: scale(" + scale + "); -webkit-transform: scale3d(" + scale + ", 1);" +
            " -moz-transform: scale(" + scale + "); -o-transform: scale(" + scale + "); transform: scale(" + scale + ");" +
            " transform-origin: top left;",
        );

        const width = w / scale;
        const height = h / scale;
        this.scale.resize(width, height);
    }
}
function BaseWidth() {
    return Number(this.config.width);
}
function BaseHeight() {
    return Number(this.config.height);
}
function BaseRatio() {
    return this.BaseWidth / this.BaseHeight;
}




// this.gameScale.setMode('resize-and-fit');








//

// function resize (gameSize, baseSize, displaySize, resolution)
// {
//     var width = gameSize.width;
//     var height = gameSize.height;
//
//     this.cameras.resize(width, height);
// }


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
