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

// var sample_array_good = [8,9,1,2,3,4,5,6,7]

// sample_array_good.forEach
//
// sample_array.forEach(checker())

function checker(sample_array_good) {
  var truth = null;
  var counter = 0;
  // console.log('run');
  var sample_array_best = [1,2,3,4,5,6,7,8,9];
  for (var i = 0; i < sample_array_best.length; i++) {
    var sample_array_best_per = [1,2,3,4,5,6,7,8,9];
    sample_array_best.forEach(function(element) {
      if (element == sample_array_good[i]) {
          truth = true;
          counter +=1;
          var removed = element -1;
          sample_array_best_per.splice(removed,1);

          // console.log(truth);
          return truth;
      } else {
        truth = false;
        console.log('up');
        return truth;
      }
    });
    console.log(counter);
    if (counter < 9&&sample_array_best_per.length>0){
      return "Not Valid";
    }else{
      return "Valid";
    }
  }
}

// checker(sample_array_good);
checker(sample_array_bad);
