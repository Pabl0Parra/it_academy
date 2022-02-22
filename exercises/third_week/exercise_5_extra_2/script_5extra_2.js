function drawL() {
  let height = parseInt(document.getElementById("userHeight").value);
  let base = parseInt(height / 2) + 1;
  let content = "";
  for (i = 0; i < height - 1; i++) {
    content += "*\n";
  }
  for (j = 0; j < base; j++) {
    content += "*";
  }

  document.getElementById("drawing").innerText = `${content}`;
}
