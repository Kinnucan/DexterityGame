class dextgameRestart extends Phaser.Scene{
  constructor(){
    super({key:"restart"});
  }

  preload(){

  }

  create(){
    for (var i = 0; i < shapeList.length; i++){
      shapeList[i].hasUsed = false;
    }
  }

  update(){
    completedShapes = 0;
    userLevel = 1;
    cumulativeScore = 0;
    winCondition = false;
    touchCounter = 0;
    this.scene.start("welcomeScreen");
  }

}
