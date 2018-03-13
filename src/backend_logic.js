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
  var length = null;
  // console.log('run');
  var sample_array_best = [1,2,3,4,5,6,7,8,9];
  var sample_array_best_per = [1,2,3,4,5,6,7,8,9];
  for (var i = 0; i < sample_array_best.length; i++) {
    sample_array_best.forEach(function(element) {
      if (element == sample_array_good[i]) {
          truth = true;
          counter +=1;
          var removed =sample_array_best_per.indexOf(element);
          console.log(removed);
          // var removed = element -1;
          sample_array_best_per.splice(removed,1);
          length = sample_array_best_per.length;
          console.log(sample_array_best_per+'ya');
          // return truth;
      } else {
        truth = false;
        console.log('up');
        // return truth;
      }
    });
    console.log(sample_array_best_per);
    console.log(counter);
    console.log(sample_array_best_per.length);
    length = sample_array_best_per.length
    // if ((counter < 9)&&(sample_array_best_per.length>0)){
    //   // return "Not Valid";
    //   console.log("Not Valid")
    // }else{
    //   console.log("Valid")
      // return "Valid";
    }

  if (counter == 9&&length == 0) {
    return "Valid total";
  } else {
    return "Not Valid";
  }
}

// checker(sample_array_good);
checker(sample_array_bad);
