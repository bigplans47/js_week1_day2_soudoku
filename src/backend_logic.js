var sample_array = [
  [1,2,3,4,5,6,7,8,9],
  [2,3,4,5,6,7,8,9,1],
  [3,4,5,6,7,8,9,1,2],
  [4,5,6,7,8,9,1,2,3],
  [5,6,7,8,9,1,2,3,4],
  [6,7,8,9,1,2,3,4,5],
  [7,8,9,1,2,3,4,5,6],
  [8,9,1,2,3,4,5,6,7],
  [9,1,2,3,4,5,6,7,8]
]

// var sample_array_best = [1,2,3,4,5,6,7,8,9];
var sample_array_bad = [4,2,3,4,5,6,7,8,9]


var sample_array_good = [8,9,1,2,3,4,5,6,7]

// sample_array_good.forEach
//
// sample_array.forEach(checker())

var truth = null;
function checker(sample_array_good) {
  console.log('run');
  var sample_array_best = [1,2,3,4,5,6,7,8,9];
  for (var i = 0; i < sample_array_best.length; i++) {
    sample_array_best.forEach(function(element) {
      if (element == sample_array_good[i]) {
          truth = true;
          console.log(truth);
          return truth;
      } else {
        truth = false;
        console.log(truth);
        return truth;
      }
    });
  }
  console.log(truth);
}

checker(sample_array_good);
