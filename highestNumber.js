var list = [4,6,2,7,8,2];
var highest = list[0];
/* checks what is the highest number in the array */
for(var i=0; i<list.length; i++) {
  if(list[i] > highest) { 
     highest = list[i];
     }
}
console.log(highest);