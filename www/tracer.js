class Tracer{
  constructor(path){
    this.path = path;
    this.pointerID;
    this.startingPoint;
    this.indexOfNextPoint;
    this.checkedDirection;
    this.checkedDirectionCounter = 0;
    this.nextPoint;
    this.currentPoint;
    this.direction;
    this.distanceThreshold = 100;
    this.dist;
  }

  start(x, y){
    this.startingPoint = null;
    this.indexOfNextPoint = null;
    this.checkedDirection = null;
    this.checkedDirectionCounter = 0;
    this.nextPoint = null;
    this.currentPoint = null;
    this.distanceThreshold = 100;
    this.direction = null;
    this.dist = null;

    // if (this.onPointReached){
    //   if (x < 400){
    //     this.setPath(1);
    //   }
    //   else if (x >= 400){
    //     this.setPath(2);
    //   }
    // }

    var startingPoint;
    var startingPointIndex;
    // text2.setText(['ok']);
    for (var i = 0; i < this.path.length; i+=2){
      this.dist = Phaser.Math.Distance.Between(x, y, this.path[i], this.path[i+1]);
      if (this.dist < this.distanceThreshold){
        startingPoint = [this.path[i], this.path[i+1]];
        startingPointIndex = i;
        this.distanceThreshold = this.dist;
      }
    }
    this.startingPoint = startingPoint;
    this.indexOfNextPoint = startingPointIndex;
    text.setText([this.startingPoint, this.indexOfNextPoint]);
  }

  trace(x, y){
    if (!this.checkedDirection){
      this._findDirectionAndNextPoint(x, y, this.path);
      this.checkedDirectionCounter ++;
      if (this.checkedDirectionCounter == 30)
        this.checkedDirection = true;
    }
    this._traceUserTouch(x, y, this.path);
  }

  _findIndexOfPoint(index, arrayLength){
    return ((index % arrayLength) + arrayLength) % arrayLength;
  }

  _findDirectionAndNextPoint(x, y, path){
    var nextIndex = this._findIndexOfPoint(this.indexOfNextPoint+2, path.length);
    var prevIndex = this._findIndexOfPoint(this.indexOfNextPoint-2, path.length);
    var direction;
    var nextPoint;
    if (Phaser.Math.Distance.Between(x, y, path[nextIndex], path[nextIndex+1]) <
          Phaser.Math.Distance.Between(x, y, path[prevIndex], path[prevIndex+1])){
        this.direction = 1;
        this.nextPoint = [path[nextIndex], path[nextIndex+1]];
    }
    else if (Phaser.Math.Distance.Between(x, y, path[prevIndex], path[prevIndex+1]) <
               Phaser.Math.Distance.Between(x, y, path[nextIndex], path[nextIndex+1])){
        this.direction = -1;
        this.nextPoint = [path[prevIndex], path[prevIndex+1]];
    }
  }

  _traceUserTouch(x, y, path){
    if (this.direction && this.checkedDirection){
      if (Phaser.Math.Distance.Between(x, y, this.nextPoint[0], this.nextPoint[1]) <= 15){
        this.currentPoint = this.nextPoint;
        this.indexOfNextPoint = this._findIndexOfPoint(this.indexOfNextPoint + (2 * this.direction), path.length);
        this.nextPoint = [path[this.indexOfNextPoint], path[this.indexOfNextPoint+1]];
        if (this.onPointReached)
          this.onPointReached(this.currentPoint[0], this.currentPoint[1]);
        // text.setText([this.startingPoint, this.currentPoint, this.nextPoint, this.indexOfNextPoint]);
        // text2.setText([x, y]);
      }
    }
  }
}
