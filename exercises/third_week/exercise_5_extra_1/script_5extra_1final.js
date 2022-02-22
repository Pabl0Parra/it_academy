let randomNumber = Math.ceil(Math.random() * 500 + 1);
console.log(randomNumber);
function guessNumber() {
  let userNumber = Number(document.getElementById("chosenNumber").value);
  let randomNumberOverUserNumber = randomNumber - userNumber;
  let randomNumberLowerUserNumber = userNumber - randomNumber;

  if (userNumber === randomNumber) {
    alert(
      ` 🏁🏁 Congrats 🎆🎇🎆! You have nailed it 🏆. The correct number is 
        ${randomNumber}!!!`
    );
  } else if (
    randomNumberOverUserNumber > 0 &&
    randomNumberOverUserNumber < 15
  ) {
    alert("🔥🔥 Hot, hot 🔥🔥 Your number is too small ➖ ");
  } else if (
    randomNumberLowerUserNumber > 0 &&
    randomNumberLowerUserNumber < 15
  ) {
    alert("🔥🔥🔥 Hot, hot 🔥🔥🔥 Your number is too big ➕");
  } else if (
    randomNumberOverUserNumber >= 15 &&
    randomNumberOverUserNumber < 50
  ) {
    alert(" 🔥 Warm, warm 🔥 Your number is too small ➖");
  } else if (
    randomNumberLowerUserNumber >= 15 &&
    randomNumberLowerUserNumber < 50
  ) {
    alert(" 🔥 Warm, warm 🔥 Your number is too big ➕");
  } else if (randomNumberOverUserNumber >= 50) {
    alert("☃️☃️ Cold, cold ☃️☃️ Your number is too small ➖");
  } else if (randomNumberLowerUserNumber >= 50) {
    alert(" ☃️☃️ Cold, cold ☃️☃️ Your number is too big ➕");
  }
}
