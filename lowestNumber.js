var list = [5,6,2,4,9,3];
var lowest = list[0];
/* checks what is the lowest number in the array */
for(var i=0; i<list.length; i++) {
  if(list[i] < lowest) { 
     lowest = list[i];
     }
}
console.log(lowest);