function drawDownwardTriangle() {
  const NUMBER = document.getElementById("userInput").value;
  let string = "";
  for (i = 0; i < NUMBER; i++) {
    for (k = 0; k < NUMBER - i; k++) {
      string += "*";
    }
    string += "<br>";
  }
  document.write(string);
}
