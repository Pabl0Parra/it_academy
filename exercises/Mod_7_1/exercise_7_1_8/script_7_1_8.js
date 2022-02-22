function convertTemp() {
  const CELSIUS = Number(document.getElementById("degrees").value);
  let fahrenheit = (CELSIUS * 9) / 5 + 32;

  document.getElementById(
    "result"
  ).innerHTML = `The temperature is ${fahrenheit}ºF`;
  return fahrenheit;
}

// function convertTemp(celsius) {
//   let celsius = Number(document.getElementById("degrees").value);
//   return "The temperature in ºFahrenheit is " + (celsius * 9) / 5 + 32;
// }
