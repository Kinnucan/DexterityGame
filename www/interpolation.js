//This function finds the distance between two points, and creates
//new points within the given distance up to, and not including the
//end point.
//Function takes in two points from a path, and an interger value representing
//the expected maximum space between any two points.
//Returns: an array of the new coordinate pairs up to the end point.
function interpolate(p0, p1, maxSpacing){
  var newPoints = [];
  var diff = [p1[0] - p0[0], p1[1] - p0[1]];
  var steps = Math.ceil(Math.hypot(diff[0], diff[1])/maxSpacing);

  for(var i = 0; i < steps; i++){
    newPoints.push([
      p0[0] + (p1[0] - p0[0]) * (i / steps),
      p0[1] + (p1[1] - p0[1]) * (i / steps)
    ]);
  }
  return newPoints;
}

//Resamples points from path.
//Takes in an array of coordinates and an integer value representing the
//maximum expected distance between any two points.
//Returns a new path as an array with the distance between points being
//less than or equal to the maximum distance given.
function resamplePath(path, maxSpacing){
  var resampledPath = [];

  for(var i = 0; i < path.length; i++){
    resampledPath.push(
      ...interpolate(path[i], path[(i+1) % path.length], maxSpacing));
  }
  return resampledPath;
}
