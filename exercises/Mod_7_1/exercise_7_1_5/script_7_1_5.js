function createEvenArray() {
  const start = 0;
  const end = 100;
  const step = 1;
  const arrayLength = Math.floor((end - start) / step) + 1;
  const range = [...Array(arrayLength).keys()].map((x) => x * step + start);
  range.sort(function (a, b) {
    return b - a;
  });
  document.getElementById(
    "allRange"
  ).innerHTML = `We have to create a even array from this: [${range}]`;

  let evenArray = [];

  for (i = 0; i < range.length; i += 2) {
    evenArray.push(range[i]);
    console.log(evenArray);
    document.getElementById(
      "evenRange"
    ).innerText = ` This is the even array:[${evenArray}]`;
  }
}
