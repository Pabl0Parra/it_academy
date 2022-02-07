function mySumFunction() {
  let y = parseFloat(document.getElementById("txt").value); // parseFloat used to allow decimal numbers.
  let z = parseInt(document.getElementById("txt1").value);
  let x = "The result of the sum is " + (y + z) + ".";
  const elementResult = (document.getElementById("data").innerHTML = x);
}

function mySubstractionFunction() {
  let y = document.getElementById("txt").value;
  let z = document.getElementById("txt1").value;
  let x = "The result of the substraction is " + (y - z) + ".";
  const elementSubstract = (document.getElementById("data").innerHTML = x);
}

function myMultiplicationFunction() {
  let y = document.getElementById("txt").value;
  let z = document.getElementById("txt1").value;
  let x = "The result of the multiplication is " + y * z + ".";
  const elementMultiply = (document.getElementById("data").innerHTML = x);
}

function myDivisionFunction() {
  let y = document.getElementById("txt").value;
  let z = document.getElementById("txt1").value;
  let x = "The result of the division is " + y / z + ".";
  const elementDivide = (document.getElementById("data").innerHTML = x);
}

function myRemainderFunction() {
  let y = document.getElementById("txt").value;
  let z = document.getElementById("txt1").value;
  let x = "The remainder is " + (y % z) + ".";
  const elementRemainder = (document.getElementById("data").innerHTML = x);
}
