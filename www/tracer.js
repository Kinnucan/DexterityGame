class tracer extends Phaser.Scene{
  constructor(array){
    this.array = array;
  }

  findStartingPoint(x, y, array, distanceThreshold){
    var startingPoint;
    var startingPointIndex;
    for (var i = 0; i < array.length; i+=2){
      dist = Phaser.Math.Distance.Between(x, y, array[i], array[i+1])
      if (dist < distanceThreshold){
        startingPoint = [array[i], array[i+1]];
        startingPointIndex = i;
        distanceThreshold = dist;
      }
    }
    return [startingPoint, startingPointIndex];
  }

  findIndexOfPoint(index, arrayLength){
    return ((index % arrayLength) + arrayLength) % arrayLength;
  }

  findDirectionAndNextPoint(x, y, arrayPosition, array){
    var nextIndex = this.findIndexOfPoint(arrayPosition+2, array.length);
    var prevIndex = this.findIndexOfPoint(arrayPosition-2, array.length);
    var direction;
    var nextPoint;
    if (Phaser.Math.Distance.Between(x, y, array[nextIndex], array[nextIndex+1]) <
          Phaser.Math.Distance.Between(x, y, array[prevIndex], array[prevIndex+1])){
        direction = 1;
        nextPoint = [array[nextIndex], array[nextIndex+1]];
    }
    else if (Phaser.Math.Distance.Between(x, y, array[prevIndex], array[prevIndex+1]) <
               Phaser.Math.Distance.Between(x, y, array[nextIndex], array[nextIndex+1])){
        direction = -1;
        nextPoint = [array[prevIndex], array[prevIndex+1]];
    }
    return [direction, nextPoint];
  }

  traceUserTouch(direction, checkedDirection, x, y, nextPoint, currentPoint, indexOfNextPoint, array){
    if (direction && checkedDirection){
      if (Phaser.Math.Distance.Between(x, y, nextPoint[0], nextPoint[1]) <= 15){
        currentPoint = nextPoint;
        indexOfNextPoint = this.findIndexOfPoint(indexOfNextPoint + (2 * direction), array.length);
        nextPoint = [array[indexOfNextPoint], array[indexOfNextPoint+1]];
        text2.setText([startingPoint2, currentPoint, nextPoint, indexOfNextPoint]);
      }
    }
    return [currentPoint, nextPoint, indexOfNextPoint];
  }
}
