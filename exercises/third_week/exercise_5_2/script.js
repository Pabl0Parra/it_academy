function findTotalSum() {
  let value1 = parseInt(prompt("Enter your first number"));
  let value2 = parseInt(prompt("Enter your second number"));

  let userNumberList = [];

  userNumberList.push(value1, value2);
  userNumberList.sort(function (a, b) {
    return a - b;
  });

  let resultList = [];
  let sumNumbers = Number("");
  for (let i = userNumberList[0]; i <= userNumberList[1]; i++) {
    resultList.push(i);
    sumNumbers += i;
    console.log(resultList);
    console.log(sumNumbers);
    document.getElementById(
      "demo"
    ).innerHTML = `The sum of the array [${resultList}] is ${sumNumbers}`;
  }
}
