function findFactorial() {
  const NUMBER = parseInt(document.getElementById("userInput").value);
  let result = 1;
  if (NUMBER == 0 || NUMBER == 1) {
    return result;
  } else {
    for (i = NUMBER; i >= 1; i--) {
      result = result * i;
    }
    document.getElementById(
      "display"
    ).innerHTML = `The factorial number of ${NUMBER} is ${result}`;
    return result;
  }
}
