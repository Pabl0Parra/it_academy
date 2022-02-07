let buttonConvert = document.querySelector("button");
let input = document.querySelector("input");
let output = document.querySelector("h2");

buttonConvert.addEventListener("click", () => {
  output.innerText = numberToWords.toWords(input.value);
});
