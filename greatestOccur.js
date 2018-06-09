var list = [4, 6, 8, 3, 4, 7, 8, 2, 4];
var maxNum; // the most occurring number in the array
var counter = 0;
var maxCounter = 0;
for (var i = 0; i < list.length; i++) {
  counter = 0;
  for (var j = 0; j < list.length; j++) {
    if (list[i] === list[j]) {
      // checking how many times the number occurs in the array
      counter++;
    }
  }
  if (counter > maxCounter) {
    // saving maximum times and most occurred number
    maxNum = list[i];
    maxCounter = counter;
  }
}
console.log(maxNum);
