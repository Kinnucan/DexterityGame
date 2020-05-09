class dextgameRestart extends Phaser.Scene{
  constructor(){
    super({key:"restart"});
  }

  preload(){

  }

  create(){
    //resets the boolean checks that makes sure no shapes is used twice
    for (var i = 0; i < shapeList.length; i++){
      shapeList[i].hasUsed = false;
    }
  }

  update(){
    //checks to make sure the user is in Landscape View
    checkOriention(window.innerWidth, window.innerHeight);
    //resets each accumlative variables
    //once the variables are reset, the user is brought to the welcome screen
    //since the user does not interact with this screen, the user does not see
    //any of this code being done.
    completedShapes = 0;
    userLevel = 1;
    cumulativeScore = 0;
    winCondition = false;
    touchCounter = 0;
    this.scene.start("welcomeScreen");
  }

}
