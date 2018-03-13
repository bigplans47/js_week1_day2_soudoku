function checker2(test_array) {
  var sample_array_best = [1,2,3,4,5,6,7,8,9];
  for (var i = 0; i < test_array.length; i++){
    for (var x = 0; x < sample_array_best.length; x++){
      if (sample_array_best[x] == test_array[i]){
        sample_array_best.splice(x,1);
      }
    }
  }
  if (sample_array_best.length == 0) {
    return "Valid total";
  } else {
    return "Not Valid";
  }
}

exports.checkerModule = checker2;
// checker2(test_array_good)
// checker2(test_array_bad)
