//Points up to ... not including
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

//
function resamplePath(path, maxSpacing){
  var resampledPath = [];

  for(var i = 0; i < path.length; i++){
    resampledPath.push(
      ...interpolate(path[i], path[(i+1) % path.length], maxSpacing));
  }
  return resampledPath;
}
