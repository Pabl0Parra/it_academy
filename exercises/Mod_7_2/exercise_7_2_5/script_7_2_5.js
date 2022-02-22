function isPrime() {
  const NUM = parseInt(document.getElementById("userInput").value);
  let result = true;
  if (NUM === 1) result = false;
  for (let i = 2; i < NUM; i++) {
    if (NUM % i == 0) {
      result = false;
      break;
    }
  }
  if (result) {
    document.getElementById("display").innerHTML = `The number ${NUM} is prime`;
  } else {
    document.getElementById(
      "display"
    ).innerHTML = `The number ${NUM} is not prime`;
  }
}
