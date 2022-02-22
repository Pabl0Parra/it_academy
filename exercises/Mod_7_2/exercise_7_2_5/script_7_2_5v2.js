function isPrime() {
  const NUM = parseInt(document.getElementById("userInput").value);
  let i = 2;
  while (NUM % i !== 0 && i < NUM / 2) {
    i++;
  }
  if (NUM % i !== 0) {
    document.getElementById("display").innerHTML = `The number is prime`;
  } else {
    document.getElementById("display").innerHTML = `The number is not prime`;
  }
}
