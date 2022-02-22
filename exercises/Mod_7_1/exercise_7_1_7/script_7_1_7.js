function printSquare() {
  const CHARACTER = document.getElementById("userCharacter").value;
  const SIZE = parseInt(document.getElementById("userNumber").value);

  for (i = 0; i < SIZE * SIZE; i++) {
    if (i !== 0 && i % SIZE === 0) {
      document.write("<br>");
    }
    document.write(CHARACTER);
  }
}
