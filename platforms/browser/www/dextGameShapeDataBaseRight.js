// class ShapeTypesRight{
//   constructor(){
//
//   }
//   create(){
    //Right Shapes
        //not sure if this should be a class or a variable? or how exactly to implement this
    const squareRight = {
      name: "squareRight",
      shapePoints: [105, 250, 226.25, 250, 226.25, 371.25, 105, 371.25],
      draw: function(){
        graphics.lineStyle(5, 0x0000FF, 1.0);
        graphics.strokeRect(105, 250, 121.25, 121.25);
      }
    };
    const triangleRight = {
      name: "triangleRight",
      shapePoints: [105, 250, 226.25, 250, 226.25, 371.25, 105, 371.25],
      draw: function() {
        graphics.lineStyle(5, 0x0000FF, 1.0);
        graphics.strokeTriangle(400, 371.25, 470, 250, 540, 371.25);
      }
    };

    const rightShapeList = [squareRight, triangleRight];

    // var randomRightShape = rightShapeList[Math.floor(Math.random() * rightShapeList.length)];

  // }


// }
