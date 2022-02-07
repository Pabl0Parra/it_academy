//first method - Function Without Parameter and Without Return
const medic = "Soy un método";

function callFunction() {
  console.log(medic);
}
callFunction();

//Second method
let myArray = [8, 12, 5, 22, 6];

//2a Find the highest number
function findMax() {
  console.log("The highest number is: " + Math.max(...myArray));
}
findMax();

//2b Find index of smallest value
function findMinIndex() {
  const min = Math.min(...myArray);
  const index = myArray.indexOf(min);
  console.log("The index of the smallest value is: " + index);
}
findMinIndex();

//2b Find value of the index above

function print_array_element(myArray, i) {
  console.log(myArray[i]);
}
console.log("The smallest value is: " + myArray[2]);

//2d
