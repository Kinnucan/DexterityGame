const squareRight = {
  name: "square",
  shapePoints: [505, 250, 626.25, 250, 626.25, 371.25, 505, 371.25],
  hasUsed: false
  draw: function(){
    graphics.lineStyle(5, 0xFF000, 1.0);
    graphics.strokeRect(505, 250, 121.25, 121.25);
  }
};
const triangleRight = {
  name: "triangle",
  shapePoints: [400, 371.25, 470, 250, 540, 371.25],
  hasUsed: false
  draw: function() {
    graphics.lineStyle(5, 0xFF000, 1.0);
    graphics.strokeTriangle(400, 371.25, 470, 250, 540, 371.25);
  }
};

const rightShapeList = [squareRight, triangleRight];

export{squareRight, triangleRight, rightShapeList};
