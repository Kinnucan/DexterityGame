const squareLeft = {
  name: "square",
  shapePoints: [105, 250, 226.25, 250, 226.25, 371.25, 105, 371.25],
  hasUsed: false,
  draw: function(){
    graphics.lineStyle(5, 0x0000FF, 1.0);
    graphics.strokeRect(105, 250, 121.25, 121.25);
  }
};
const triangleLeft = {
  name: "triangle",
  shapePoints: [100, 371.25, 170, 250, 240, 371.25],
  hasUsed: false,
  draw: function() {
    graphics.lineStyle(5, 0x0000FF, 1.0);
    graphics.strokeTriangle(100, 371.25, 170, 250, 240, 371.25);
  }
};

const leftShapeList = [squareLeft, triangleLeft];

// export {squareLeft, triangleLeft, leftShapeList};
