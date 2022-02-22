function drawLeftTriangle() {
  const NUMBER = document.getElementById("userInput").value;
  let string = "";
  for (i = 0; i < NUMBER; i++) {
    for (j = 0; j <= i; j++) {
      string += "*";
    }
    string += "<br>";
  }
  document.write(string);
}
