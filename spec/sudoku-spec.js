var checker2 = require('./../src/backend_logic.js').checkerModule;


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

var test_array_good = [9,1,2,3,4,5,6,7,8]
var test_array_bad = [1,2,3,4,5,6,7,8,8]


describe('checker2', function(){
  it('should return a string stating the validity of a sudoku array', function(){
    console.log('test');
  });
});
