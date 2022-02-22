function drawRightPascal() {
  const NUMBER = Number(document.getElementById("userInput").value);
  let string = "";
  for (i = 1; i <= NUMBER; i++) {
    for (j = 0; j < i; j++) {
      string += "*";
    }
    string += "<br>";
  }
  for (i = 1; i <= NUMBER - 1; i++) {
    for (j = 0; j < NUMBER - i; j++) {
      string += "*";
    }
    string += "<br>";
  }
  document.write(string);
}
