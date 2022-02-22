function getSumArray() {
  let value1 = parseInt(prompt("Enter the first number"));
  let value2 = parseInt(prompt("Enter the second number"));

  let userNumberList = [];

  userNumberList.push(value1, value2);
  userNumberList.sort(function (a, b) {
    return a - b;
  });
  console.log(userNumberList);
}
