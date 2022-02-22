function multiplyNumber() {
  const NUMBER = parseInt(document.getElementById("numberEntered").value);

  for (let i = 1; i <= 10; i++) {
    const result = i * NUMBER;

    document.write(`${NUMBER} * ${i} = ${result}<br>`);
  }
}
