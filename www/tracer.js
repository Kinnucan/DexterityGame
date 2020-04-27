class tracer{
  constructor(array){
    this.array = array;
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

  findStartingPoint(x, y, startArray){
    var startingPoint;
    var startingPointIndex;
    for (var i = 0; i < startArray.length; i+=2){
      this.dist = Phaser.Math.Distance.Between(x, y, startArray[i], startArray[i+1]);
      if (this.dist < this.distanceThreshold){
        startingPoint = [startArray[i], startArray[i+1]];
        startingPointIndex = i;
        this.distanceThreshold = this.dist;
      }
    }
    this.startingPoint = startingPoint;
    this.indexOfNextPoint = startingPointIndex;
  }

  findIndexOfPoint(index, arrayLength){
    return ((index % arrayLength) + arrayLength) % arrayLength;
  }

  findDirectionAndNextPoint(x, y, array){
    var nextIndex = this.findIndexOfPoint(this.indexOfNextPoint+2, array.length);
    var prevIndex = this.findIndexOfPoint(this.indexOfNextPoint-2, array.length);
    var direction;
    var nextPoint;
    if (Phaser.Math.Distance.Between(x, y, array[nextIndex], array[nextIndex+1]) <
          Phaser.Math.Distance.Between(x, y, array[prevIndex], array[prevIndex+1])){
        this.direction = 1;
        this.nextPoint = [array[nextIndex], array[nextIndex+1]];
    }
    else if (Phaser.Math.Distance.Between(x, y, array[prevIndex], array[prevIndex+1]) <
               Phaser.Math.Distance.Between(x, y, array[nextIndex], array[nextIndex+1])){
        this.direction = -1;
        this.nextPoint = [array[prevIndex], array[prevIndex+1]];
    }
  }

  traceUserTouch(x, y, array){
    if (this.direction && this.checkedDirection){
      if (Phaser.Math.Distance.Between(x, y, this.nextPoint[0], this.nextPoint[1]) <= 15){
        this.currentPoint = this.nextPoint;
        this.indexOfNextPoint = this.findIndexOfPoint(this.indexOfNextPoint + (2 * this.direction), array.length);
        this.nextPoint = [array[this.indexOfNextPoint], array[this.indexOfNextPoint+1]];
        text2.setText([this.startingPoint, this.currentPoint, this.nextPoint, this.indexOfNextPoint]);
      }
    }
  }
}
