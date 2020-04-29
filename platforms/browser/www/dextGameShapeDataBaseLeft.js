// class ShapeTypesLeft{
//   constructor(){
//
//   }
//   create(){
    //Left Shapes
    //not sure if this should be a class or a variable? or how exactly to implement this
      const squareLeft = {
        name: "squareLeft",
        shapePoints: [105, 250, 226.25, 250, 226.25, 371.25, 105, 371.25],
        draw: function(){
          graphics.lineStyle(5, 0x0000FF, 1.0);
          graphics.strokeRect(105, 250, 121.25, 121.25);
        }
      };
      const triangleLeft = {
        name: "triangleLeft",
        shapePoints: [105, 250, 226.25, 250, 226.25, 371.25, 105, 371.25],
        draw: function() {
          graphics.lineStyle(5, 0x0000FF, 1.0);
          graphics.strokeTriangle(400, 371.25, 470, 250, 540, 371.25);
        }
      };

      const leftShapeList = [squareLeft,triangleLeft];

//   }
// }

// var randomLeftShape = leftShapeList[Math.floor(Math.random() * leftShapeList.length)];
