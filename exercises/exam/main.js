function range(start, end, step = 1) {
  const len = Math.floor((end - start) / step) + 1;
  return Array(len)
    .fill()
    .map((_, idx) => start + idx * step);
}
let array1 = range(5, 100, 5);
array1.sort(function (a, b) {
  return b - a;
});
let array2 = [];
for (i = 0; i < array1.length; i++) {
  if (array1[i] % 3 === 0) {
    array2.push(array1[i]);
  }
}
function printAnswer() {
  document.getElementById("array1").innerText = array1;
  document.getElementById("array2").innerText = array2;
}
