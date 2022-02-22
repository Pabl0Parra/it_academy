function isLeapYear() {
  const YEAR = Number(document.getElementById("userInput").value);

  if (YEAR % 400 === 0 || (YEAR % 4 === 0 && YEAR % 100 != 0)) {
    return (document.getElementById("display").innerText =
      "The year entered is a leap year!");
  }

  return (document.getElementById("display").innerText =
    "The year entered is not a leap year");
}
